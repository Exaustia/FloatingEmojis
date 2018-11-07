import { Component } from "react";
import styles from './stylesheets/index.scss' 
import EmojisComponent from './emojis/component/emojis-component'

class Index extends Component {
  render() {
    return (
      <div className='container'>
        <EmojisComponent />
      </div>
    )
  }
}

export default Index