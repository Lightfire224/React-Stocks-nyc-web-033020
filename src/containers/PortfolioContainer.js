import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  state = {
    added: false
  }

  render() {
    console.log(this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(portfolio => (
              <Stock key={portfolio.id} {...portfolio} handleClick={this.props.removeFromPortfolio} />
            ))
          }
      </div>
    );
  }

}

export default PortfolioContainer;
