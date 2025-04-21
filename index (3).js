import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count:0}

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 101)
    this.setState({count : randomNum})
  }

  render() {
      const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onIncrement}>Generate</button>
          <p className="number"> {count} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
