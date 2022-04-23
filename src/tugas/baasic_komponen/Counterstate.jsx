import React, { Component } from "react";

export default class Counterstate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        }); 
    };
    
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
    
    render() {
        return (
            <div>
                <h1>Hi State Reactjs</h1>
                <h3>counter app</h3>
                <p>The count is: {this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
    
}

