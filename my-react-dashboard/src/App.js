import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import ChartComponent from './components/ChartComponent';
import LeadManagement from './components/LeadManagement';
import ReportGenerator from './components/ReportGenerator';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="content">
                <h1>Welcome to EzyMetrics Dashboard</h1>
                <ChartComponent />
                <div className="dashboard-widgets">
                    <Widget title="Total Leads" content="150" />
                    <Widget title="Monthly Revenue" content="$5,000" />
                    <Widget title="Conversion Rate" content="25%" />
                </div>
                <LeadManagement />
                <ReportGenerator />
            </div>
        </div>
    );
}

export default App;
