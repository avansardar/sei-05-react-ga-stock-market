import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = ({myStocks, buyOrSell}) => {
  return (
    <div>
      <h2>My Portfolio - ${myStocks.reduce((acc, stock) => acc += stock.price, 0)}</h2>
      {
        //render the list of stocks here using the Stock component
        myStocks.map(stock => {
          return <Stock key={stock.price} stock={stock} myStocks={myStocks} buyOrSell={buyOrSell} />;
        })
      }
    </div>
  );
}

export default PortfolioContainer;
