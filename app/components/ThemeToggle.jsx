// components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ mode, modeHandler }) => {
  return (
    <button onClick={modeHandler} className="p-2 bg-blue-500 text-white rounded">
      {mode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
