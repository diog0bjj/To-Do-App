import React, { Component } from "react"
import "./App.css";


class App extends Component {
  state = {
  task: "",
  taskList: []
  }

  add = (event) => {
    let {task, taskList} = this.state
    if(task.length > 0){
    this.setState({
      taskList: taskList.concat({
        task: task,
        id: Date.now()
      }),
      task: ''
    })
  }
  event.preventDefault()
  }

  remove = (id, event) => {
    
    let {task, taskList} = this.state
    this.setState({
      taskList: taskList.filter((item) => {
        return item.id != id;
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  render(){
    return(
      <form className="container">
        <div className="principal">
          <h1>To-Do App</h1>
        </div>
        <div className="taskbar">
          <input className="inputbar" type="text" value={this.state.task} placeholder="Type something to do..." onChange={this.handleChange} />
          <button className="taskadd" onClick={this.add}>+</button>
        </div>
        <div className="Tasks">
          {this.state.taskList.map((item) => (
            <ul className="TaskItems">
              <li>{item.task}</li>
              <li><button className="taskremove" onClick={()=>{this.remove(item.id)}}>x</button></li>
            </ul>
          ))}
        </div>
      </form>
    )
  }
}
export default App;

