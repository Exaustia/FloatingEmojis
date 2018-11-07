import { Component } from 'react'
import FloatingEmojisContainer from '../lib/container/floating-emojis-container'

class EmojisComponent extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            emojis: {
                numberOfEmojis: 0
            }
        }
    }
    componentDidMount() {
        this.setKeyFrames()
    }
    sendEmoji = () => {
        this.setState({
            emojis: {
                numberOfEmojis: 1
            }
        })
    }

    setKeyFrames = () => {
        const MAX = 201
        let styleSheet = document.styleSheets[0]
        const styles = `
      @keyframes float{
          ${Array.apply(null, { length: MAX + 1 })
                .map((v, x) => (
                    {
                        percent: x * 100 / MAX,
                        width: Math.sin(x / 5) * 5,
                        height: 100 + x * (-120 / MAX),
                        opacity: 1 - (x / 130)

                    }))
                .map(
                    ({ percent, width, height, opacity }) =>
                        `${percent}% {
              transform: translate(
                ${width}vw,
                ${height}vh         
              );
             opacity: ${opacity}
              
            }`
                )
                .join('')}
      }`
        styleSheet.insertRule(styles, styleSheet.cssRules.length)
    }

    render() {
        const emoji = {
            numberOfEmojis: 4
        }
        return (
            <div className='content-emoji'> 
                <div className='input-emoji' onClick={this.sendEmoji}>Click here</div>
                <div className='container-emojis'> <FloatingEmojisContainer emojis={this.state.emojis} /></div>
            </div>
        )
    }
}

export default EmojisComponent