import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup';

const data = [
    {name:'Khánh', url:'./img/imgGirl/khanh.jpg'},
    {name:'Burn', url:'./img/imgGirl/burn.jpg'},
    {name:'Mai', url:'./img/imgGirl/mai.jpg'}
]

export default class Ex2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: './img/imgGirl/khanh.jpg'
        }
    }
    changeImg = (newImg) => {
        this.setState({imgSrc: newImg})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={this.state.imgSrc} alt="" style={{width:500, height:500}}/>
                        </div>
                        <div className="col-8">
                            <ButtonGroup data={data} khanh={'./img/imgGirl/khanh.jpg'} burn={'./img/imgGirl/burn.jpg'} mai={'./img/imgGirl/mai.jpg'} changeImg={this.changeImg}  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
