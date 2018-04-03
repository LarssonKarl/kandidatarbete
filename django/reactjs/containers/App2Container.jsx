import React from "react"
import Radium from "radium"
import Headline from "../components/Headline"
import ReactButton from "../components/ReactButton"
import { Container, Row, Col } from 'reactstrap'


const styles = {
  button: {
    cursor: "pointer",
  },
  counter: {
    color: "blue",
    fontSize: "20px",
  },
  column:{
    background: "green",
    textAlign: 'center', 
  },

}


@Radium
export default class App2Container extends React.Component {
  constructor(){
    super();
    this.state ={
    }
  }

  render() {
    return (
<div className="container">
        {/* <div className="row">
           <div className="col-sm-1">
          </div>
          <div className="col-sm-auto">
            <Headline>Sample App!</Headline>
            <button style={[styles.button]}>Hej</button>
          </div>
        <div className="col-sm-1">
          </div>
        </div> */}
        <form action='' method='post' name='form'>
            <input type='textBox' name='title'> </input>
        </form>

      </div>
    )
  }
}