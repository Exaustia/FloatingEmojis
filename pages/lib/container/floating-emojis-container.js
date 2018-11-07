import React, { Component } from 'react'

/**
 * Gestion de l'affichage des emojis sur les écrans
 */
class FloatingEmojisContainer extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      totalNumberOfRenderedEmojis: 0,
      emojisStack: []
    }
  }

  componentDidMount () {
    this.updateRenderOfEmojis(this.props.emojis)
  }

  componentWillReceiveProps (nextProps) {
    this.updateRenderOfEmojis(nextProps.emojis)
  }

  updateRenderOfEmojis = (emojis) => {
    const emojisToStack = Array.apply(null, Array(emojis.numberOfEmojis)).map((item, i) => {
      const img = "../images/emoji_cat.png"
      return {
        img: img,
        index: i + 1,
        key: `emoji-${this.state.totalNumberOfRenderedEmojis + i + 1}`,
        style: this.getStyleOfEmoji(i)
      }
    })
    this.setState(prevState => ({
      emojisStack: prevState.emojisStack.concat(emojisToStack),
      totalNumberOfRenderedEmojis: prevState.totalNumberOfRenderedEmojis + emojisToStack.length
    }))
  }

  removeEmoji = (key) => {
    this.setState(prevState => ({
      emojisStack: prevState.emojisStack.filter(emoji => emoji.key !== key)
    }))
  }

  getStyleOfEmoji = () => {
    const _size = Array.isArray(FloatingEmojisContainer.settingsEmojis.size)
      ? Math.floor(Math.random() * (FloatingEmojisContainer.settingsEmojis.size[1] - FloatingEmojisContainer.settingsEmojis.size[0] + 1)) + FloatingEmojisContainer.settingsEmojis.size[0]
      : FloatingEmojisContainer.settingsEmojis.size

    return {
      position: 'absolute',
      left: 0,
      fontSize: _size + 'em',
      transform: 'translateY(110vh)',
      animationName: 'float',
      animationDelay: Math.random() + 's',
      animationDuration: FloatingEmojisContainer.settingsEmojis.duration + 's',
      animationTimingFunction: FloatingEmojisContainer.settingsEmojis.animation,
      animationRepeat: FloatingEmojisContainer.settingsEmojis.repeat,
      animationDirection: FloatingEmojisContainer.settingsEmojis.direction,
      marginLeft: Math.random() * (70 - 30 + 1) + 30 + '%'
    }
  }

  render () {
    console.log(this.props)
    return (
      this.state.emojisStack.map((emoji) =>
        <Floating style={emoji.style} key={emoji.key} img={emoji.img}
          callback={() => this.removeEmoji(emoji.key)} />
      )
    )
  }
}

class Floating extends Component {
  componentDidMount () {
    this.timeOut = setTimeout(() => {
      this.props.callback()
    }, 9000)
  }

  render () {
    return (
      <div style={this.props.style}><img src={this.props.img} /></div>
    )
  }
}

FloatingEmojisContainer.settingsEmojis = {
  repeat: 1,
  duration: 8,
  direction: 'normal',
  size: 2,
  animation: 'linear'
}

export default FloatingEmojisContainer
