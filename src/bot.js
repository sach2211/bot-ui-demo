import React, { Component } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import logo from './logo.svg';
import 'react-chat-widget/lib/styles.css';

export default class TestBot extends React.Component {
    constructor() {
        this.state = {
        }
    }
    componentDidMount() {
        addResponseMessage("Hello, How can I help you ?")
        addUserMessage("Hi")
        this.askUserName()
    }

    askUserName() {
        addResponseMessage("Whats your name ?")
        this.setState({currentQuestion: 'askName'})
    }

    handleNewUserMessage(message) {
        console.log(message)
        switch (this.state.currentQuestion) {
            case "askName": {
                this.setState({...this.state, userName: message})
                break;
            }
        }
    }

    render() {
        return (
            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar={logo}
                    title="My new awesome title"
                    subtitle="And my cool subtitle"
                    launcher={handleToggle => (
                        <button
                            style={{ position: 'fixed', bottom: '10px', right: '10px', border: '2px solid black', zIndex: '-1' }}
                            onClick={handleToggle}>Chat Button</button>
                    )}
                />
            </div>
        )
    }
}
