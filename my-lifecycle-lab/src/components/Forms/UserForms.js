import React from 'react';
import ToDoList from "../ToDoList/ToDoList"

class UserForms extends React.Component {

  

    render() {
        return (
          <div className="UserForms">
            <ToDoList onChange={(e) => {
              this.props.updateList(e.target.value) 
            }}/>
          </div>
        );
      }
}



export default UserForms;