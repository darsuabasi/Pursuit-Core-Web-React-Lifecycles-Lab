import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserForms from "./components/Forms/UserForms"

// import ToDoList from "./components/ToDoList/ToDoList"


class App extends React.Component{
  constructor(props) {
    super(props) 
    this.state = {list: []} 
    this.updateList = this.updateList
    debugger
  }

  addList = (text) => { this.setState({list: [text]})
    // {}
  }
  // state = {
  //   toDo: []
  // };

  render() {
    return (
      <div className="parentDiv">

      <div className="App">
        <UserForms/>
      </div>
      
      <div>
        List
        {this.state.value}
      </div> 
</div>

    );
  }
}

export default App;
