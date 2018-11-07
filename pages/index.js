import { react, Component } from "react";
import styles from './stylesheets/index.scss' 
import EmojisComponent from './emojis/emojis-component'


class Index extends Component {
  constructor() {
    super(...arguments)
    this.refOfContainer = null
  }
setRefOfContainer = (element) => {
  if(element){
    this.refOfContainer = element
  }
}

  render() {
    // const style = {
    //   width: this.refOfContainer.clientWidth,
    //   height: this.refOfContainer.clientHeight
    // }
    //console.log(document.styleSheets)
    return (
      <div className='container' ref={this.setRefOfContainer} >
        <EmojisComponent refOfContainer={this.refOfContainer} />
      </div>
    )
  }
}

export default Index