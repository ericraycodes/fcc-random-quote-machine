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
  const [fade, setFade] = useState(false);

  // This effect will run on first load before dependencies.
  useEffect(() => {
    console.log('...useEffect runs');
    setTimeout(async () => {
      const randomQuote = await fetchRandomQuote();
      setQuote(randomQuote);
      setFade(false);
    }, 1000);

    return () => {
      console.log('...useEffect cleanup');
      setFade(true);
    };
  }, [click]);

  const handleClick = () => {
    console.log('Button clicked.')
    setClick(click + 1);
  };

  const style = {
    opacity : fade ? '0%':'100%'
  };


  return (
    <>
    <section id='quote-box'>
      <Quote
        quote={quote}
        color={color}
        style={style}
      />
      <Buttons
        onClick={handleClick}
      />
    </section>
    {console.log('COMPONENT: <App />')}
    </>
  );
}
