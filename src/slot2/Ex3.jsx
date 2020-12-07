import React, { Component } from 'react'

export default class Ex3 extends Component {
    render() {
        // const {str} = this.props;
        return (
            <div>
                <h1>Demo Props</h1>
                <h1>{this.props.str2}</h1>
            </div>
        )
    }
}
