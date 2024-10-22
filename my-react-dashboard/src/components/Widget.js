import React from 'react';
import './Widget.css';

const Widget = ({ title, content }) => {
    return (
        <div className="widget">
            <h3>{title}</h3>
            <div className="widget-content">
                {content}
            </div>
        </div>
    );
};

export default Widget;
