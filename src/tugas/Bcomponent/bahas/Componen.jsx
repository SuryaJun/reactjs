import React from "react";

class Componen extends React.Component {
    constructor(props) {
        super(props)
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
        return(
            <div>
                <h1>Komponen class</h1>
                <h3>Hi {this.props.name }</h3>
                <button onClick={this.decrement}>-</button>
                <span>{' '} {this.state.count} {' '}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Componen;