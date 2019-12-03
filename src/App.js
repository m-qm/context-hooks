import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App () {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <EventList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
