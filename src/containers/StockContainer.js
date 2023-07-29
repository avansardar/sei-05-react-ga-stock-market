import React from 'react';
import Stock from '../components/Stock'

const StockContainer = ({buyOrSell, stocks}) => {

  return (
    <div>
      <h2>Stocks</h2>
      {
        //render the list of stocks here using the Stock component
        stocks && stocks.map(stock => {
          return (
            <Stock key={stock.price} stock={stock} buyOrSell={buyOrSell} />
          );
        })
      }
    </div>
  );

}

export default StockContainer;
