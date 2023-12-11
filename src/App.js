import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

import quotes from './quotes.js';


import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// import data from './quotes.json';

// Resource for random color options.
const colors = [
  '#711DB0', '#FFB534', '#88AB8E', '#1640D6', '#3081D0',
  '#994D1C', '#B06161', '#A25772', '#FF5B22', '#B0A695'
];

// The functions generate random quotes and colors.
const generateRandomQuote = (q) => q[Math.floor(Math.random() * q.length)];
const generateRandomColor = (c) => c[Math.floor(Math.random() * c.length)];

export default function App() {
  const [quote, setQuote] = useState(generateRandomQuote(quotes));
  const [color, setColor] = useState(generateRandomColor(colors));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const quotesData = fetch('./src/quotes.json')
      .catch(error => console.log('FETCH ERROR:', error))
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(error => console.log('JSON ERROR:', error))
      .then(data => console.log(data))
      .catch(error => console.log('DATA ERROR:', error));
  }, []);

  const handleClick = () => {
    setQuote(generateRandomQuote(quotes));
    setColor(generateRandomColor(colors));
  };
  document.querySelector('body').style.backgroundColor = color;
  return (
    <section id='quote-box'>
      <QuoteAndAuthor
        quote={quote}
        color={color}
      />
      <Buttons
        quote={quote}
        onClick={handleClick}
        color={color}
      />
    </section>
  );
}

function QuoteAndAuthor({ quote, color }) {
  return (
    <>
      <div style={{color: color}}>
        <FontAwesomeIcon className='icon-quote' icon={faQuoteLeft} />
        <blockquote id='text'>{quote['quote']}</blockquote>
      </div>
      <span id='author' style={{color: color}}>- {quote['author']}</span>
    </>
  );
}

function Buttons({ quote, onClick, color }) {
  // The 'href' must be completed for tweeting the fetched quote.
  return (
    <div className='buttons'>
      <a
        id='tweet-quote'
        href={'twitter.com/intent/tweet' + quote }
        target='_blank'
        style={{backgroundColor: color}}
      ><FontAwesomeIcon icon={faXTwitter} /></a>
      <button
        id='new-quote'
        onClick={onClick}
        style={{backgroundColor: color}}
      >New quote</button>
    </div>
  );
}

export function Footer() {
  return (
    <div className='footer'>
      <p>By Eric Ray O. Saladar. For freeCodeCamp purposes only.</p>
    </div>
  );
}
