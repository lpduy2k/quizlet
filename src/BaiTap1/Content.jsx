import React, { Component } from 'react'
import Input from './Input';
import Radio from './Radio';
export default class Content extends Component {
    renderAnswer = () => {
        return this.props.data.answers.map((as, index) => {
            if(this.props.data.questionType === 1){
                return <Radio checkRadio={this.checkRadio} dataParent={this.props.data} rd={as} key={index}/>
            }else{
                return <Input dataParent={this.props.data} ip={as} key={index}/>
            }
        })
    }

    checkRadio = (value) => {
        const newPoint = this.state.point
        if (value === this.props.data.answers.exact){
            newPoint += 1;
        }
        this.setState({
            newPoint: newPoint
        })
    }

    render() {
        const {data} = this.props; 
        return (
            <div className="mt-3">
                <h3 style={{height:100}}><span>STT({data.id})</span>{data.content}</h3>
                {this.renderAnswer()}
            </div>
        )
    }
}
