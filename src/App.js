import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTodos from './Components/Containers/DisplayTodos';
import CreateTodo from './Components/Components/CreateTodo'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Navigation from './Components/Components/Navigation';
import EditTodo from './Components/Containers/EditTodo';
function App() {
  return (
    <Router>
      <Navigation />
      <Switch> 
        <Route exact path="/dashboard" component={DisplayTodos} />
        <Route exact path="/create" component={CreateTodo} />
        <Route exact path="/edit/todo/:id" component={EditTodo} />
      </Switch>
    </Router>
  );
}

export default App;
