import { Component, Fragment } from "react";

import Index from "./components/index";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Index />
      </Fragment>
    )
  }
}

export default App;
