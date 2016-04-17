import React, {
  AppRegistry,
  View,
} from 'react-native';

const todoItems = [
  'buy some books',
  'cut the rope',
  'remember the milk',
];

class TodoApp extends React.Component {
  render() {
    return (<View />);
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
