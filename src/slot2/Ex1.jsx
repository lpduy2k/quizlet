import React, { Component } from 'react'
import Ex3 from './Ex3'

export default class Ex1 extends Component {
    src = "duy dep trai"
    // arrow function
    hello = () => {
        alert("hello")
    }

    hello1 = () => {
        // closure 1 cái hàm trả về 1 hàm khác
        return () => {
            alert("hello")
        }
    }
    // state là biến nằm trong cái file này thôi, nó sẽ cung cấp 1 cái hàm
    // re-render lại giao diện
    constructor(props) {
        super(props);
        this.state = {
            isStudy : false
        }
    }
    
    bindingText = () => {
        if (this.state.isStudy) {
            return <h1>di học</h1>
        }else{
            return <h1>nghỉ học</h1>
        }
    }

    changeText = () => {
        // this.state.isStudy = true;
        this.setState({isStudy: !this.state.isStudy}, () => {
            console.log(this.state.isStudy);
        });
    }
    str = "toi là Duy"
    render() {
        return (
            <div>
                <h3>{this.src}</h3>
                {/* handling event */}
                {/* {this.hello()} */}
                <button type="button" class="btn btn-primary" onClick={this.hello}>Hello</button>
                {this.bindingText()}
                <button type="button" class="btn btn-primary" onClick={this.changeText}>Change Text</button>
                <Ex3 str2 = {this.str}/>
            </div>
        )
    }
}
