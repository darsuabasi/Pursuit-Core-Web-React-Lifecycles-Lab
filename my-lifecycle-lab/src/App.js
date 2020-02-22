import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserForms from "./components/Forms/UserForms"

// import ToDoList from "./components/ToDoList/ToDoList"


class App extends React.Component{
  state = {
    toDo: []
  };

  render() {
    return (
      <div className="App">
        <UserForms/>

      </div>
    );
  }
}

export default App;
