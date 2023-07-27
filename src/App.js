import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    width:"200px",
    higth:"100p",
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#222',
  };

  return (
    < >
      <div style={styles}>
      <h1>Dark Mode Toggle</h1>
        </div>
      
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </>
  );
};

export default DarkModeToggle;

