import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import './ex2.css'

export default class Ex2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="body">
                    <div className="w"><LeftContent /></div>
                    <div className="w"><RightContent /></div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
