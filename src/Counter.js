import React, { Component } from 'react';

export class Counter extends Component {
    render() {
        return (
            <h1 style={{ color: this.props.color }}>
                Score : {this.props.counter}
            </h1>
        );
    }
}
