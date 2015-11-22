import React, { Component } from 'react';
import { Motion, Spring } from 'react-motion';
import { NICE, SUPER_NICE, BLACK } from './colors';
import { Counter } from './Counter.js';
import { Button } from './Button.js';
import random from 'lodash/number/random';
import range from 'lodash/utility/range';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        setInterval(() => { this.forceUpdate(); }, 1000);
    }
    resetState() {
        this.setState({
            counter: 0,
        });
    }

    handleButtonClick() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <div>
                    <Counter color={BLACK} counter={counter}/>
                </div>
                <div>
                    <ul>
                        {range(0, 5).map((i) => <Button key={i} onClick={this.handleButtonClick.bind(this)}
                        x={random(200, window.document.body.clientWidth-100)}
                        y={random(500, window.document.body.clientHeight)}
                        radius={random(50, 150)} />)}
                    </ul>
                </div>
            </div>
        );
    }
}
