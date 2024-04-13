import React from 'react';

const Container = ({ children }) => {
    return (
        <div style={{ margin: '0 auto', maxWidth: '800px' }}>
            {children}
        </div>
    );
}

export default Container;