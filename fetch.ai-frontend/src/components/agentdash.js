import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastStyles.css';

const AgentDashboard = () => {
    const location = useLocation();
    const { job } = location.state || {}; // Get job data from location state
    const [decisions, setDecisions] = useState([]);
    const [agentOutputs, setAgentOutputs] = useState([]);
    const [data, setData] = useState([]);

    const triggerAgent = () => {
        const url = 'http://127.0.0.1:5000/run_agents'; // Flask route to trigger agents

        console.log('Triggering agents with job:', job);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jobName: job?.jobName,
                jobDescription: job?.jobDescription, // Ensure this is a string that can be parsed
                startDate: job?.startDate
            }),  // Send job details as the payload
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Agents response:', data);
                toast.success('Agents triggered successfully!');
                // Optionally, fetch decisions from the supplier after triggering
                fetchAgentOutput();
            })
            .catch((error) => {
                console.error('Error triggering agents:', error);
                toast.error('Failed to trigger agents.');
            });
    };

    const fetchAgentOutput = () => {
        const url = 'http://127.0.0.1:5000/fetch_agent_output'; // Flask route to fetch agent output

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched agent output:', data);
                setAgentOutputs(Object.entries(data));

                // Prepare data for the line chart
                const chartData = Object.entries(data).map(([agentName, agentData]) => ({
                    agent: agentName,
                    executionTime: agentData.execution_time || 0, // Default to 0 if not available
                }));
                setData(chartData);
            })
            .catch((error) => {
                console.error('Error fetching agent output:', error);
                toast.error('Failed to fetch agent output.');
            });
    };

    useEffect(() => {
        fetchAgentOutput(); // Fetch agent output when the component mounts
    }, []);

    return (
        <div>
            <h2>Agent Dashboard</h2>
            <p>Job Name: {job?.jobName}</p>
            <p>Job Description: {job?.jobDescription}</p>
            <p>Start Date: {job?.startDate}</p>
            <div>
                <button onClick={triggerAgent}>Trigger Agents</button>
                <ToastContainer />
            </div>
            <div>
                <h3>Agent Decisions</h3>
                <ul>
                    {decisions.map((decision, index) => (
                        <li key={index}>{decision.from}: {decision.status}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Agent Execution Time</h3>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="executionTime" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="agent" />
                    <YAxis label={{ value: 'Execution Time (seconds)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div>
                <h3>Agent Output Logs</h3>
                <div>
                    {agentOutputs.map(([agentName, agentData], index) => (
                        <div key={index} className="output-section">
                            <h4>{agentName}</h4>
                            <p><strong>Logs:</strong></p>
                            <p className="highlight">{agentData.logs ? agentData.logs.replace(/\n/g, '<br>') : 'No logs available'}</p>
                            <p><strong>Execution Time:</strong> <span className="highlight">{agentData.execution_time ? agentData.execution_time.toFixed(2) : 'N/A'} seconds</span></p>
                            {agentData.final_supplier && (
                                <p><strong>Final Supplier:</strong> <span className="highlight">{JSON.stringify(agentData.final_supplier, null, 2)}</span></p>
                            )}
                            {agentData.best_transporter && (
                                <p><strong>Best Transporter:</strong> <span className="highlight">{JSON.stringify(agentData.best_transporter, null, 2)}</span></p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;
