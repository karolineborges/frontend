import React from 'react';

const Container = ({ children }) => {
    return (
        <div style={{
            margin: '0 auto', maxWidth: '100vw', overflow: "auto" }}>
            {children}
        </div>
    );
}

export default Container;