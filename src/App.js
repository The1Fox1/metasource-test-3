import React from 'react';
import './App.css';
import Table from './Table.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Test 3
          </h1>
          FizzBuzz Emoji Edition:
        </header>
        <Table/>
      </div>
    );
  }
}

export default App;
