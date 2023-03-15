// Write your code here
import React from 'react'
import './index.css'
class RandomNumberGenarator extends React.Component {
  state = {number: 0}
  genarateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }
  render() {
    const {number} = this.state
    return (
      <div className="container">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={this.genarateNumber}>Generate</button>
        <p className="number">{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenarator
