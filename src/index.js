import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import quotes from './quotes.js';

// import './index.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);

const colors = ['gray', 'brown', 'yellow', 'blue', 'orange'];

const generateRandomQuote = (q) => q[Math.floor(Math.random() * q.length)];
const generateRandomColor = (c) => c[Math.floor(Math.random() * c.length)];

// REACT
function App() {
  const [quote, setQuote] = useState(generateRandomQuote(quotes));
  const [color, setColor] = useState(generateRandomColor(colors))
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

function Buttons({ onClick, color }) {
  return (
    <div className='buttons'>
      <a
        id='tweet-quote'
        href='twitter.com/intent/tweet'
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

function Footer() {
  return (
    <div className='footer'>
      <p>By Eric Ray O. Saladar. For freeCodeCamp purposes only.</p>
    </div>
  );
}

const ref ="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Start%20where%20you%20are.%20Use%20what%20you%20have.%20%20Do%20what%20you%20can.%22%20Arthur%20Ashe";
