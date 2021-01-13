import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => { return current.count += 1 }); // 이런 의미인데 아래와 같이 객체를 return하게끔 코딩.
                                                             // 변수 하나 return하면 하나밖에 return 못함.
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));  // { count: current.count -1 }이라는 객체를 return하기 위해 ()로 감쌈. (문법)
                                                              // 객체로 return해야 여러게 setState()가능
  };
  render() {
    return (
      <div>
        <h1>Counting number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
