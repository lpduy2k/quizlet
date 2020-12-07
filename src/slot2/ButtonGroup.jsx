import React, { Component } from 'react'

export default class ButtonGroup extends Component {
    renderButton = () => {
        const {changeImg, data} = this.props;
        return data.map((item,index)=>{
            return (
                <button key={index} type="button" class="btn btn-warning" onClick={() =>{changeImg(item.url)}}>Nhấn em {item.name}</button>
            )
        })
    }
    render() {
        const {khanh,burn,mai,changeImg} = this.props;
        return (
            <div>
                {/* <button type="button" class="btn btn-warning" onClick={() => {changeImg(khanh)}}>Nhấn em Khánh</button>
                <button type="button" class="btn btn-warning" onClick={() => {changeImg(burn)}}>Nhấn em Burn</button>
                <button type="button" class="btn btn-warning" onClick={() => {changeImg(mai)}}>Nhấn em Mai</button> */}
                {this.renderButton()}
            </div>
        )
    }
}
