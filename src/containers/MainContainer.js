import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioIds: []
  }

  addToPortfolio = (stockId) => {
    this.setState({
        portfolioIds: [...this.state.portfolioIds, stockId]
      })
  }

  removeFromPortfolio = (stockId) => {
    //make a new list by making a new array, where each portfolioStock is not equal to the stock
    //receieved from the handle click
    this.setState({
      portfolioIds: this.state.portfolioIds.filter(portfolioId => portfolioId !== stockId)
    })
  }

  fetchAllStockData = () => {
    fetch(`http://localhost:3000/stocks`)
      .then(response => response.json())
      .then(stocks => {
        this.setState({ stocks })
      })
  }

  componentDidMount() {
    this.fetchAllStockData()
  }

  render() {
    //arr of stox
    let portfolio = this.state.portfolioIds.map(id => this.state.stocks.find(stock => id === stock.id))
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

            <PortfolioContainer
              portfolio={portfolio}
              removeFromPortfolio={this.removeFromPortfolio}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
