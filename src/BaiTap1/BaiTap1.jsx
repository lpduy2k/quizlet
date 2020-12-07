import React, { Component } from 'react'
import Content from './Content'
import data from './data.json';
export default class BaiTap1 extends Component {
    constructor(props) {
        super(props);
        this.state = {point: 0};
    }

    renderQuestions = () => {
        return data.map((qs, index) => {
            return <div className="col-6" key={index}>
                <Content point={this.state.point} data={qs} />
            </div>
        })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = () => {
        alert('Số điểm của bạn là: ' + this.state.point);
    }

    render() {
        return (
            <div className="container" onSubmit={this.handleSubmit}>
                <h1 className="text-center text-success my-4">Quizlet</h1>
                <div className="row">
                    {this.renderQuestions()}
                </div>
                <div className="text-right my-3">
                    <button className="btn btn-success" onClick={() => {this.handleSubmit()}}>Submit</button>
                </div>
            </div>
        )
    }
}
