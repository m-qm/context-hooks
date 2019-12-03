import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import ThemeContextProvider from './context/ThemeContext';

function App () {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <EventList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
