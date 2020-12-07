import React, { Component } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import NavBar from './NavBar'

export default class Ex3 extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}
