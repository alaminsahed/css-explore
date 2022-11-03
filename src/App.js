import React from 'react';
import TestCss from './components/TestCss';
import "./darkMode.css"

function App() {
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>APP</h1>
      <TestCss />
    </div>
  );
}

export default App;
