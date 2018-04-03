import React from "react"
import { render } from "react-dom"

import App2Container from "./containers/App2Container"

class App2 extends React.Component {



  render() {
    return (
      <App2Container />
    )
  }
}

render(<App2/>, document.getElementById('App2'))