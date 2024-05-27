import React from 'react';
import './App.css';
import AFrameComponent from './components/AFrameComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React with A-Frame and TypeScript</h1>
      </header>
      <AFrameComponent />
    </div>
  );
}

export default App;
