import React, { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
        };
    }

    increment = () => {
        this.setState((prev) => ({ cnt: prev.cnt + 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.cnt}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Count;