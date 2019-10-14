
import React from "react";

class App extends React.Component {
  render() {
    const {name} = this.props;
    return <div>Hello {name}</div>;
  }
}

export default App;
