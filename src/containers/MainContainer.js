import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  addToPortfolio = (stock) => {
    console.log(stock)
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  fetchAllStockData = () => {
    fetch(`http://localhost:3000/stocks`)
      .then(response => response.json())
      .then(stocks => {
        this.setState({stocks})
      })
  }

  componentDidMount(){
    this.fetchAllStockData()
  }

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">

            <StockContainer 
              stocks={this.state.stocks}
              addToPortfolio={this.addToPortfolio}
            />

          </div>
          <div className="col-4">

            <PortfolioContainer />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
