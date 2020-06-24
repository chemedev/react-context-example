import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle the theme</button>;
};
