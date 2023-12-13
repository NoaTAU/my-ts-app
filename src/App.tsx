import React from 'react';
import './App.css';

function App() {
  const greet = (name: string) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My TypeScript App</h1>
        <button onClick={() => greet('User')}>Say Hello</button>
      </header>
    </div>
  );
}

export default App;