import React, { Component } from 'react'

export default class lastQuestion extends Component {
    state = { count: 0 };
    inc = 1 ;

    increaseCount(increase){
      this.setState ({
        count: this.state.count + increase,
      })
      this.state = {
        count: this.state.count + increase,
      };
    }
    
    increaseCount(inc);

    render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}
