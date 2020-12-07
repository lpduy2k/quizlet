import React, { Component } from 'react'
export default class Radio extends Component {
    valueRadio = () => {
        return document.querySelector('.checkPoint').value;
    }
    render() {
        const {rd, dataParent, checkPoint} = this.props;
        return (
            <div classname="mt-2">
                <div className="form-check"> 
                    <input className="checkPoint form-check-input" type="radio" name={dataParent.id} id={rd.id} value={rd.exact} onChange={checkPoint} />
                    <label className="form-check-label" htmlFor={rd.id}>
                    {rd.content}
                    </label>
                </div>
            </div>
        )
    }
}
