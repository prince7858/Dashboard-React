import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>EzyMetrics</h2>
            <ul>
                <li>Dashboard</li>
                <li>Leads</li>
                <li>Analytics</li>
                <li>Reports</li>
            </ul>
        </div>
    );
};

export default Sidebar;
