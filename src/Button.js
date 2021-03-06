import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';
import random from 'lodash/number/random';
import range from 'lodash/utility/range';


export class Button extends Component {
    render () {
        let style = (x, y, radius) => ({
            background: 'radial-gradient(orange 0%, hsla(0, 100%, 20%, 0) 100%) 0 0',
            width: radius,
            height: radius,
            borderRadius: radius,
            position: 'absolute',
            left: x,
            top: y
        });

        let start = {
            x: this.props.x,
            y: this.props.y,
            radius: this.props.radius
        };

        let end = (prevValue) => ({
            x: spring(prevValue.x + random(-100, 100), presets.wobbly),
            y: spring(prevValue.y + random(-100, 100), presets.wobbly),
            radius: spring(prevValue.radius + random(-10, 30), presets.wobbly)
        });

        return (<Motion defaultStyle={start} style={end(start)}>
            { interpolated => <div onClick={this.props.onClick} style={ style(interpolated.x , interpolated.y, interpolated.radius) }></div>}
        </Motion>
        );
    }
}
