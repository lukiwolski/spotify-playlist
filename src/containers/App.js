import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import List from './List';
import PlayControls from './PlayControls';

const App = () =>
  <div>
    <Input />
    <PlayControls />
    <List />
  </div>;

export default connect()(App);
