import React from "react"
import Radium from "radium"


const styles = {
  button: {
    cursor: "pointer",
    padding: '10px',
    textDecoration: 'none', 
  },
}


@Radium
export default class ReactButton extends React.Component {
  render() {
    return (
     //<input type="button" onClick={window.location="/review/"}>

    <a href={ this.props.redirectPath } style={styles.button}>{ this.props.children }</a>

    )
  }
}