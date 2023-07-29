import React, {useState, useEffect} from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import {stockList} from '../../data.js'

const MainContainer = () => {
  const [masterStocks, setMasterStocks] = useState(stockList);
  const [myStocks, setMyStocks] = useState([]);
  const [stocks, setStocks] = useState(stockList);
  const [sort, setSort] = useState(null);

  // async function fetchStocks() {
  //   const res = await fetch("http://localhost:3000/stocks");
  //   res
  //     .json()
  //     .then(res => {
  //       setStocks(res);
  //       setMasterStocks(res);
  //     })
  //     .catch(err => console.log("ERROR: ", err));
  // }

  // useEffect(() => {
  //   fetchStocks();
  // }, []);
  console.log(stocks)

  function buyOrSell(newStock, action) {
    if (action === "sell") {
      console.log("SELLING")
      const newPortfolio = myStocks.filter(stock => stock.name !== newStock.name);
      setMyStocks(newPortfolio);
    } else if (action === "buy") {
      console.log("BUYING")
      if (myStocks.includes(newStock)) return;
      setMyStocks([...myStocks, newStock]);
    }
  }

  function handleSort(method) {
    setSort(method)
    setStocks(stocks.sort(function (a, b) {
      if (a[method] < b[method]) {
        return method === "name" ? -1 : 1
      }
      if (a[method] > b[method]) {
        return method === "name" ? 1 : -1;
      }
      return 0;
    }))
  }

  function handleFilter(evt) {
    if (evt.target.value === "All") {
      return setStocks(masterStocks);
    }
    const filteredStocks = masterStocks.filter(stock => stock.type === evt.target.value);
    setStocks(filteredStocks);
  }

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleSort={handleSort} sort={sort} />
      <div className="row">
        <div className="col-1">
          {/* leave this div blank */}
        </div>
        <div className="col-5">
          <StockContainer buyOrSell={buyOrSell} stocks={stocks} />
        </div>
        <div className="col-5">
          <PortfolioContainer buyOrSell={buyOrSell} myStocks={myStocks} />
        </div>
        <div className="col-1">
          {/* leave this div blank */}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
