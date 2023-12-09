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


/**
  There are two pieces of state:
    1. random quote with author
    2. random theme color to each random quote
*/


/* FCC Random Quote Machine */

const randomQuote = (q) => {
  const random = Math.floor(Math.random() * q.length);
  return q[random];
};

// REACT
function App() {
  const [quote, setQuote] = useState(randomQuote(quotes));
  const handleClick = () => {
    setQuote(randomQuote(quotes));
  };
  return (
    <section id='quote-box'>
      <QuoteAndAuthor quote={quote}/>
      <Buttons onClick={handleClick}/>
    </section>
  );
}

function QuoteAndAuthor({ quote }) {
  return (
    <>
      <div>
        <FontAwesomeIcon className='icon-quote' icon={faQuoteLeft} />
        <blockquote id='text'>{quote['quote']}</blockquote>
      </div>
      <span id='author'>- {quote['author']}</span>
    </>
  );
}

function Buttons({ onClick }) {
  return (
    <div className='buttons'>
      <a
        id='tweet-quote'
        href='twitter.com/intent/tweet'
        target='_blank'
      ><FontAwesomeIcon icon={faXTwitter} /></a>
      <button
        id='new-quote'
        onClick={onClick}
      >New quote</button>
    </div>
  );
}

function Footer() {
  return <div className='footer'>by Eric Ray O. Saladar</div>;
}
