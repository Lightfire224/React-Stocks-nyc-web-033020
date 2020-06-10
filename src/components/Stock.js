import React from 'react'
//when a user clicks on a stock,
// it should be added to portfolio

//create an onclick for the stock

//onClick={() => props.addToPortfolio(props.name)}
// triggers when you click

// runs automatically
// onClick={props.addToPortfolio(props.name)}

//if we dont have the anonymous function in the onClick props.addToPortfolio will run on page render
// so we need to do the anonymous function in order to make the function run specifically
// when the div is clicked. Also, when it is clicked, we pass the entire stock object

const Stock = (props) => (

  <div>
      <div className="card" onClick={() => props.addToPortfolio(props)}>
        <div className="card-body">
          <h5 className="card-title">{
              props.name
            }</h5>
          <p className="card-text">
            {props.ticker}: {props.price}
          </p>
        </div>
      </div>
    </div>

);

export default Stock
