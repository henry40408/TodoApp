import React, {
  AppRegistry,
} from 'react-native';

import TodoList from './components/TodoList';

class TodoApp extends React.Component {
  render() {
    return (<TodoList />);
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
