// src/components/StockList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=HWZMYWJ0RUHSWCEO');
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Indian Stock Market Information</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            <p>{stock.symbol}</p>
            <p>{stock.EPS}</p>
            {/* Add more stock data fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
