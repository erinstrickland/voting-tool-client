import React from 'react'
import Test from './Test'

const Voting = class Voting extends React.Component {
  getPair() {
    return this.props.pair || []
  }
  render() {
    return <div className="voting">
      {this.getPair().map(entry =>
      <button key={entry}>
      <h1>{entry}</h1>
    </button>)}
    <Test />
  </div>
  }
}

export default Voting