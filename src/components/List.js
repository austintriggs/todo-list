import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            complete: false
        }
        this.completed = this.completed.bind(this);
    }
    
    completed(){
        this.setState({
            complete: true
        })
    }
    render() {
        return (
            <ul>
                {
                    this.props.listItems.map((item, index) => {
                    return (
                    <div align="left" key={index} style={{'text-decoration': this.state.complete ? 'line-through' : '' }}>
                        <li key={index}>{item}</li>
                        <button onClick={()=>this.props.deleteTask(item)}>Delete</button>
                        <button id="complete" disabled={this.state.complete} onClick={this.completed}>Complete</button>
                    </div>
                    )})
                }
            </ul>
        );
    }
}

export default List;