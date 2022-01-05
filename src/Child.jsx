import React from 'react';
class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'tejaswini',
    };
  }
  changehandler = () => {
  this.setState({name:"namatejaswini"},()=>{
    this.props.parenthandler(this.state.name)
  })
  };
  render() {
    return (
      <div>
        <h1>child component</h1>
        <button onClick={this.changehandler}>sending</button>
      </div>
    );
  }
}
export default Child;
