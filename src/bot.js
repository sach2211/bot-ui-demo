import BotUI from "botui/build/botui.js"
import "botui/build/botui.min.css"
import "botui/build/botui-theme-default.css"

const botui = new BotUI('my-botui-app');


export const sayHello = () => {
    return botui.message.add({
        content: "Hello, I'm here to help you"
    })
}

export const ackHello = () => {
    return botui.message.add({
        human: true,
        content: "Hi, Nice to meet you !"
    })
}

export const converse = () => {
    return botui.message.add({ // show a message
        content: 'Whats your name?'
    }).then(function () { // wait till its shown
        return botui.action.text({ // show 'text' action
            action: {
                placeholder: 'Your name'
            }
        });
    }).then(function (res) { // get the result
        botui.message.add({
            content: `Welcome  ${res.value} !`
        });
    })
}

export const changeColor = () => {
    botui.message.add({ // show a message
        content: 'Select your favourite color - '
    }).then(function () { // wait till its shown
        return botui.action.button({ // show 'text' action
            action: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                }
            ]
        });
    }).then(function (res) { // get the result
        botui.message.add({
            type: 'html',
            content: `<span style="color: ${res.value}">Ok, lets converse in ${res.value} from now!</span>`
        });
    });
}

