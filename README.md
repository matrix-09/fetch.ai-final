# Automated Procurement Management for Efficient Supply Chains

## 🚀 Project Overview

This project revolutionizes procurement management by automating key tasks within the supply chain. Designed specifically for procurement managers, the platform utilizes uAgents to streamline processes such as supplier selection, quality checks, transportation coordination, and implementation. Each agent is tailored to handle specific tasks, reducing manual effort and enhancing efficiency. By integrating these automated agents, the application ensures smoother operations, faster decision-making, and improved compliance with procurement policies. The intuitive interface allows procurement managers to monitor progress, make informed decisions, and maintain effective communication across all stages of the supply chain, leading to a more agile and responsive procurement process.

## Live Demo

Check out the live demo: [dApp - Procurement Management](https://fetchai-frontend.netlify.app/)

## 🌟 Features

- *Automated Supplier Selection:* The supplier agent automatically selects top suppliers and confirms orders based on inventory availability.
- *Quality Assurance Checks:* The quality agent shortlists suppliers and transporters based on predefined quality criteria.
- *Logistics Coordination:* The transport agent manages transporter selection and coordinates logistics for timely goods delivery.
- *Implementation Management:* Oversees the integration of procured items into the supply chain, ensuring proper deployment and usage.
- *Business User Agent:*  Manages procurement activities and aligns them with business objectives.
  

## 🛠 Tech Stack

### Frontend

- *React.js:* A JavaScript library for building dynamic user interfaces. It enhances user experience by efficiently updating and rendering components.
- *Material UI:* A React component library offering pre-designed UI components for a consistent and professional design.
- *Glassmorphism:* A design trend that uses frosted glass effects for a modern, sleek look, implemented through CSS for a visually appealing user interface.
- *Recharts:* Utilized in our UI to create interactive and visually appealing charts that effectively display agent execution times and other key metrics.

### Backend

- *Flask:* A lightweight Python framework used for building web applications and APIs. It handles routing, data processing, and integrates seamlessly with uAgents.
- *UAgents:* A decentralized framework that facilitates autonomous decision-making and communication between agents in the supply chain.

## 📂 Directory Structure


automated_procurement_management/
├── backend/
│   ├── agents/
│   │   ├── business_user_agent.py
│   │   ├── implementation_agent.py
│   │   ├── quality_checker_agent.py
│   │   ├── supplier_agent.py
│   │   └── transport_agent.py
│   ├── app.py
│   ├── business_confirmation.json
│   ├── implementation.json
│   ├── quality_check.json
│   ├── suppliers.json
│   └── transporters.json
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── admindash.js
│       │   ├── agentdash.js
│       │   ├── login.js
│       │   ├── navbar.js
│       │   ├── procdash.js
│       │   └── signup.js
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── styles.js
│   ├── ToastStyles.css
│   ├── AgentDashboard.css
│   ├── login.css
│   └── package.json
├── .gitignore
└── README.md


## 📥 Installation

### Prerequisites

Ensure you have the following installed:
- *npm* for managing JavaScript packages
- *Python 3.x* for running the backend
- *Flask* and other Python dependencies

### Setup Instructions

1. *Clone the Repository:*

   bash
   git clone https://github.com/yourusername/automated-procurement-management.git
   cd automated-procurement-management
   

2. *Set Up the Frontend:*

   bash
   cd frontend
   npm install
   

3. *Set Up the Backend:*

   bash
   cd backend
   pip install -r requirements.txt
   

4. *Run the Backend:*

   bash
   python app.py
   

5. *Run the Frontend:*

   bash
   cd ../frontend
   npm run dev
   

6. *Access the Application:*

   Open your browser and navigate to http://localhost:5173 to access the application.

## 📊 Agent Descriptions

- *Supplier Agent:* Selects top suppliers, coordinates the final selection, and confirms orders based on inventory availability.
- *Quality Agent:* Shortlists the final supplier and transporter based on quality criteria for procurement.
- *Transport Agent:* Chooses top transporters, confirms the final selection, and arranges logistics for goods delivery.
- *Implementation Agent:* Oversees the deployment of procured items, ensuring they are correctly integrated into the supply chain.
- *Business User Agent:*  Manages procurement activities and aligns them with business objectives.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

### Steps to Contribute:

1. *Fork the repository:*

   sh
   git clone https://github.com/yourusername/automated-procurement-management.git
   cd automated-procurement-management
   

2. *Create a new branch for your feature or bugfix:*

   sh
   git checkout -b feature-or-bugfix-name
   

3. *Make your changes and commit them:*

   sh
   git commit -am 'Add new feature or fix'
   

4. *Push your branch to GitHub:*

   sh
   git push origin feature-or-bugfix-name
   

5. *Create a Pull Request:*
   - Go to the repository on GitHub.
   - Click on the "New Pull Request" button.
   - Provide a description of your changes and submit the PR.

## 📝 Contact

For any questions or suggestions, please open an issue or contact [Your Name](mailto:mahideepnagireddi@gmail.com).
