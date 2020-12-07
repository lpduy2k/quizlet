import React, { Component } from 'react'
export default class Input extends Component {
    render() {
        const {dataParent} = this.props;
        return (
            <div className="mt-2">
                <input type="text" className="form-control" id={dataParent.content}  placeholder="answers" />
            </div>
        )
    }
}
