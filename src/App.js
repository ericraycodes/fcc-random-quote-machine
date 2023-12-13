import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Quote from './Quote';
import Buttons from './Buttons';
import fetchRandomQuote from './fetchRandomQuote.js';

// Resource for random color options.
const colors = [
  '#711DB0', '#FFB534', '#88AB8E', '#1640D6', '#3081D0',
  '#994D1C', '#B06161', '#A25772', '#FF5B22', '#B0A695'
];


// temporary
const color = colors[1];


export default function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [click, setClick] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  // This effect will run on first load before dependencies.
  useEffect(() => {
    console.log('...useEffect');
    setTimeout(async () => {
      const randomQuote = await fetchRandomQuote();
      setQuote(randomQuote);
    }, 0);
  }, [click]);

  // animation effects
  useEffect(() => {
    setFadeIn(true);
  }, []);

  function handleClick() {
    setClick(click + 1);
  }
  console.log('click', click);

  const fadeInStyle = {
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 500mx linear'
  };

  return (
    <>
    <section id='quote-box'>
      <Quote
        quote={quote}
        color={color}
        fadeInStyle={fadeInStyle}
      />
      <Buttons
        onClick={handleClick}
      />
    </section>
    {console.log('<App />')}
    </>
  );
}
