import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       input: '',
       listItems: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);   
    this.deleteTask = this.deleteTask.bind(this);
}

onChange(e){
this.setState({
    input: e.target.value
})
}

onSubmit(e){
e.preventDefault()
this.setState({
    input: '',
    listItems: [...this.state.listItems, this.state.input]
})
}

deleteTask(e) {
var arr = this.state.listItems;
var index = arr.indexOf(e);
arr.splice(index, 1);
this.setState({
  listItems: arr
})
}


  render() {
    return (
      <div className="App">
        <form className="to-do-form" onSubmit={this.onSubmit}>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <button disabled={!this.state.input}>Submit</button>
        </form>
        <List listItems = {this.state.listItems} deleteTask = {this.deleteTask}/>
      </div>
    );
  }
}

export default App;
