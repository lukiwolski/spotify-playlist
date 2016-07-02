import React from 'react';
import Input from './Input';
import List from './List';
import PlayControls from './PlayControls';

class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <List />
        <PlayControls />
      </div>
    );
  }
}

export default App;
