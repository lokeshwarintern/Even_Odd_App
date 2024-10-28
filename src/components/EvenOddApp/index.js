import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(() => ({
      count: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const paraText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading-ele">
            Count <span>{count}</span>
          </h1>
          <p className="para-ele">{paraText}</p>
          <button className="btn-ele" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase by Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
