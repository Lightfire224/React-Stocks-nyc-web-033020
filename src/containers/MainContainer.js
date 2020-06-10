import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
console.log(1+1)
class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioIds: [],
    filterStockArrayOriginal: [],
    radioValue: '',
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

  handleClick = (radioValue) => {
    this.setState({ radioValue })
    if (radioValue === "Alphabetically") {
      this.state.stocks.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    else if (radioValue === "Price") {
      this.state.stocks.sort((a, b) => a.price > b.price ? 1 : -1)
    }
  }

  handleOnChange = (industry) => {
    if (industry !== "All") {
      this.setState({
        stocks: this.state.filterStockArrayOriginal.filter(stock => stock.type === industry)
      })
    }
    else {
      this.setState({
        stocks: this.state.filterStockArrayOriginal
      })
    }
  }


  fetchAllStockData = () => {
    fetch(`http://localhost:3000/stocks`)
      .then(response => response.json())
      .then(stocks => {
        this.setState({ stocks })
        this.setState({ filterStockArrayOriginal: stocks })
      })
  }

  componentDidMount() {
    this.fetchAllStockData()
  }

  render() {
    //arr of stox
    console.log(this.state.stocks)
    let portfolio = this.state.portfolioIds.map(id => this.state.stocks.find(stock => id === stock.id))
    return (
      <div>
        <SearchBar
          handleClick={this.handleClick}
          radioValue={this.state.radioValue}
          handleOnChange={this.handleOnChange}
          dropDownChange={this.dropDownChange}
        />

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
