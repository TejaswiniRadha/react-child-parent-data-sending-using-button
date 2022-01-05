import React from 'react';
import Child from './Child';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      names: [],
    };
  }
  changehandler = (e) => {
    this.setState({ name: e.target.value });
    //console.log(e.target.value);
  };
  submithandler = () => {
    const { names } = this.state;
    names.push(this.state.name);
    this.setState({ names, name: '' });
    //console.log(names);
  };
  removehandler = (index) => {
    let { names } = this.state;
    names.splice(index, 1);
    this.setState({ names });
    console.log(names);
  };
  render() {
    return (
      <div>
        <h1>parent component</h1>
        <input
          type="text"
          placeholder="username"
          name="name"
          value={this.state.name}
          onChange={this.changehandler}
        />
        <button onClick={this.submithandler}>submit</button>
        <ul>
          {this.state.names.map((name, index) => (
            <li
              onClick={() => {
                this.removehandler(index);
              }}
              key={index}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
