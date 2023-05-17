import React from 'react';
import CoreButton from './UI/CoreButton/CoreButton';

export default class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <p>Counter Class: {this.state.counter}</p>
                <CoreButton onClick={this.increment}>increment</CoreButton>
                <CoreButton onClick={this.decrement}>decrement</CoreButton>
            </div>
        )
    }

}