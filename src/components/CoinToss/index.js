import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onToss = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCount = heads
    let tailsCount = tails

    if (toss === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailsCount += 1
    }
    this.setState({
      tossImage: tossImage,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {tossImage, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
