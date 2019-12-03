import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

function App () {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar />
          <EventList />
          <ThemeToggle />
        </AuthContextProvider>

      </ThemeContextProvider>
    </div>
  );
}

export default App;
