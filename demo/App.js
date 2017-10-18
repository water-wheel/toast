import React, { Component } from 'react'
import Toast from '../src/index.js'
import './index.scss'

export default class App extends Component {

    constructor(args, context){
        super(args);

        this.state = {
            open: false,
            content: ''
        }
    }

    showToast() {
        this.setState({
            open: true,
            content: 'message message'
        })
    }

    onClose() {
        this.setState({
            open: false,
            content: ''
        })
    }


    render() {
        return (
            <section className="container">
                <div onClick={ () => { this.showToast() } }>点击显示toast</div>
                <Toast {...this.state} onRequestClose={() => this.onClose()} />
            </section>
        )
    }
}
