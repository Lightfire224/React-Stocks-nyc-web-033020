import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => 
          (<Stock key={stock.id} {...stock} addToPortfolio={this.props.addToPortfolio}/>)
        )}
      </div>
    );
  }

}

export default StockContainer;
