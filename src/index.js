import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import quotes from './quotes.js';

import './index.css';
import './styles.css'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/**
  There are two pieces of state:
    1. random quote with author
    2. random theme color to each random quote
*/


/* FCC Random Quote Machine */

const randomQuote = (q) => {
  const random = Math.floor(Math.random() * q.length);
  console.log(q.length, random);
  return q[random];
};
randomQuote(quotes);
// REACT
function App() {
  const [quote, setQuote] = useState(randomQuote(quotes));

  function handleClick() {
    setQuote(randomQuote(quotes));
  }

  return (
    <section id='quote-box'>
      <blockquote id='text'>
        <span className='double-quote'>&quot;</span>
        {quote['quote']}
      </blockquote>
      <span id='author'>- {quote['author']}</span>
      <button
        id='new-quote'
        onClick={handleClick}
      >New quote</button>
      <a
        id='tweet-quote'
        href='twitter.com/intent/tweet'
        target='_blank'
      >Tweet</a>
    </section>
  );
}
