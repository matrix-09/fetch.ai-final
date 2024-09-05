
# **Automated Procurement Management for Efficient Supply Chains**

## 🚀 **Project Overview**

This project transforms procurement management by automating critical tasks within the supply chain using a decentralized architecture. Designed specifically for procurement managers, the platform leverages uAgents to streamline processes such as supplier selection, quality checks, transportation coordination, and implementation. Each agent is customized to handle specific tasks, significantly reducing manual effort and enhancing efficiency. By integrating these automated agents, the application ensures smoother operations, faster decision-making, and improved compliance with procurement policies. The intuitive interface allows procurement managers to monitor progress, make informed decisions, and maintain effective communication across all stages of the supply chain, leading to a more agile and responsive procurement process.

## 🌐 **Live Demo**

Experience the live demo: [dApp - Procurement Management](https://fetchai-frontend.netlify.app/)

## 🌟 **Features**

- **Automated Supplier Selection:** The supplier agent autonomously selects top suppliers and confirms orders based on inventory availability.
- **Quality Assurance Checks:** The quality agent evaluates suppliers and transporters using predefined quality criteria, ensuring high standards.
- **Logistics Coordination:** The transport agent manages transporter selection and coordinates logistics to ensure timely goods delivery.
- **Implementation Management:** Monitors the integration of procured items into the supply chain, ensuring proper deployment and usage.
- **Business User Agent:** Manages procurement activities to align with business objectives and streamline operations.
- **Advanced Security and Authentication:** Each uAgent operates independently, employing secure cryptographic protocols to prevent unauthorized actions and ensure data integrity.

## 💡 **Why uAgents Over CRUD Operations?**

Traditional CRUD operations can handle basic data storage and retrieval, but they fall short in a decentralized, autonomous system requiring robust security, flexibility, and error handling:

- **Autonomous Operation:** Each uAgent is an independent entity capable of making decisions and executing tasks without central oversight, reducing bottlenecks and single points of failure.
- **Enhanced Security:** uAgents use cryptographic methods to authenticate actions, ensuring that all transactions are secure and authorized, preventing data tampering or fraudulent activities.
- **Error Handling and Accountability:** The decentralized nature of uAgents allows for peer verification and error detection, reducing the likelihood of false outputs or unauthorized modifications.
- **Scalability and Flexibility:** The system can easily be expanded by adding new agents for additional supply chain functions without the need for significant architectural changes.
- **Real-Time Decision Making:** uAgents enable real-time communication and decision-making, essential for maintaining an agile and responsive supply chain.

## 🛠 **Tech Stack**

### **Frontend**

- **React.js:** A powerful JavaScript library for building dynamic, responsive user interfaces. It enhances user experience by efficiently updating and rendering components.
- **Material UI:** A React component library that provides pre-designed UI components, ensuring a consistent and professional design.
- **Glassmorphism:** A modern design trend using frosted glass effects for a sleek, visually appealing interface.
- **Recharts:** Utilized to create interactive and visually appealing charts that effectively display agent execution times and other key metrics.

### **Backend**

- **Flask:** A lightweight Python framework for building web applications and APIs. It handles routing, data processing, and integrates seamlessly with uAgents.
- **uAgents:** A decentralized framework that facilitates autonomous decision-making and secure communication between agents in the supply chain.

## 📂 **Directory Structure**

The project is organized as follows:

```bash
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
```

## 📥 **Installation**

### **Prerequisites**

Ensure you have the following installed:
- **npm** for managing JavaScript packages
- **Python 3.x** for running the backend
- **Flask** and other Python dependencies

### **Setup Instructions**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/automated-procurement-management.git
   cd automated-procurement-management
   ```

2. **Set Up the Frontend:**

   ```bash
   cd frontend
   npm install
   ```

3. **Set Up the Backend:**

   ```bash
   cd backend
   pip install -r requirements.txt
   ```   

4. **Run the Backend:**

   ```bash
   python app.py
   ```

5. **Run the Frontend:**

   ```bash
   cd ../frontend
   npm run dev
   ```

6. **Access the Application:**

   Open your browser and navigate to `http://localhost:5173` to access the application.

## 📊 **Agent Descriptions**

- **Supplier Agent:** Automates the selection of top suppliers, coordinates the final selection, and confirms orders based on inventory availability.
- **Quality Agent:** Shortlists the final supplier and transporter based on quality criteria for procurement.
- **Transport Agent:** Manages transporter selection, confirms the final selection, and coordinates logistics for goods delivery.
- **Implementation Agent:** Oversees the deployment of procured items, ensuring they are correctly integrated into the supply chain.
- **Business User Agent:** Manages procurement activities and aligns them with business objectives.

## 📽 Diagrams

Explore the following diagrams to understand the system's architecture and design:

- **Class Diagram:**
 ![Class Diagram](class_diag.png)
- **Component Diagram:**
 
 ![Component Diagram](component_diag.png)
- **State Diagram:**
 
 ![State Diagram](state_diag.png)
- **Activity Diagram:**
 
 ![Activity Diagram](activity_diag.png)

## 📽 Presentation

For a detailed overview of the project's objectives, implementation, and future enhancements, please refer to the [Automated Procurement Management Presentation](./fetch.ai_final.pdf).
## 🤝 **Contributing**

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

### **Steps to Contribute:**

1. **Fork the repository:**

   ```sh
   git clone https://github.com/yourusername/automated-procurement-management.git
   cd automated-procurement-management
   ```

2. **Create a new branch for your feature or bugfix:**

   ```sh
   git checkout -b feature-or-bugfix-name
   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -am 'Add new feature or fix'
   ```

4. **Push your branch to GitHub:**

   ```sh
   git push origin feature-or-bugfix-name
   ```

5. **Create a Pull Request:**
   - Go to the repository on GitHub.
   - Click on the "New Pull Request" button.
   - Provide a description of your changes and submit the PR.

## 📝 **Contact**

For any questions or suggestions, please open an issue or contact [MahiDeep](mailto:mahideepnagireddi@gmail.com).
