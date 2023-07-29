<img src="https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">

## GA Stock Exchange

Welcome to the General Assembly Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the GA Stock Market.

We will be using `JSON-server` to act as a RESTful API that we can use the fetch information about stocks!

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

After starting the server, you can make a GET request to `http://localhost:3000/stocks` to retrieve the data

After the stocks are fetched, your job is to:
* Render all the stocks onto the page. The styling of how a Stock should look like is already in the `Stock.js` component.
* allow a user to buy a stock by clicking on it and when it is bought, it should be added to `My Portfolio`.
* allow a user to sell a stock in their `Portfolio` by clicking on the stock and it should be removed from their `Portfolio`.
* allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
* allow a user to filter stocks based on the type of the stock.

Best of luck!
