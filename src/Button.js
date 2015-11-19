import React, { Component } from 'react';
import {Spring} from 'react-motion';
import random from 'lodash/number/random';
import range from 'lodash/utility/range';


export class Button extends Component {
    render () {
        const style = (x, y) => ({
            background: 'radial-gradient(orange 0%, hsla(0, 100%, 20%, 0) 100%) 0 0',
            width: this.props.radius,
            height: this.props.radius,
            borderRadius: this.props.radius,
            position: 'absolute',
            left: x,
            top: y
        });

        return (
            <div onClick={this.props.onClick} style={ style(this.props.x, this.props.y) }></div>
        );
    }
}
