import React from "react";

// Loader Component
const Loader = () => {
    return (
        <div
            data-testid="loader-container" // Add this line
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
            }}
        >
            <div
                className="spinner-border"
                style={{ width: '5rem', height: '5rem' }}
                role="status"
            ></div>
        </div>
    );
};

export default Loader;


