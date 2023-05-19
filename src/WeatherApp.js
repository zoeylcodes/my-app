import React, { useState, useEffect } from "react";
import "./Weather.css";

const WeatherApp = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Be yourself; everyone else is already taken. - Oscar Wilde",
      "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The best way to predict the future is to create it. - Peter Drucker",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="weather-app">
      <div className="quote-container">
        <p className="quote-text">"{quote}"</p>
      </div>
    </div>
  );
};

export default WeatherApp;
