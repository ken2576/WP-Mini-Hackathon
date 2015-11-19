import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
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
                    <Button onClick={this.handleButtonClick.bind(this)}
                        x={random(100, window.document.body.clientWidth-100)}
                        y={random(300, window.document.body.clientHeight+800)}
                        radius={random(50, 200)} />
                </div>
            </div>
        );
    }
}
