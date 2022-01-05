import React from 'react';
import Child from './Child';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'tejaswini',
    };
  }
  parenthandler = (childdata) => {
    this.setState({ name: childdata });
    console.log(childdata);
  };
  render() {
    return (
      <div>
        <h1>parent component</h1>
        name:{this.state.name}
        <Child parenthandler={this.parenthandler} />
      </div>
    );
  }
}
export default App;
