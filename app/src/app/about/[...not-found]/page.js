import React from 'react';

function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column',
      backgroundColor: '#f8f8f8',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1rem' }}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
