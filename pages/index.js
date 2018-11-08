import { Component } from "react";
import styles from './stylesheets/index.scss' 
import  FloatingEmojisContainer  from './emojis/container/floating-emojis-container'


class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
        emojis: {
            numberOfEmojis: 0
        }
    }
}

sendEmoji = () => {
    this.setState({
        emojis: {
            numberOfEmojis: 1, // Number emojis send
            img: 'cat.png' // image
        }
    })
}


render() {
    const emoji = {
        numberOfEmojis: 4
    }
    return (
        <div className='content-emoji'> 
            <div className='input-emoji' onClick={this.sendEmoji}>Click here</div>
            <FloatingEmojisContainer emojis={this.state.emojis} />
        </div>
    )
}
}

export default Index