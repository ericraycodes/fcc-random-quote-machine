import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Quote from './Quote';
import Buttons from './Buttons';
import { fetchRandomQuote, randomColor } from './functions.js';


export default function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [color, setColor] = useState(randomColor());
  const [click, setClick] = useState(0);
  const [fade, setFade] = useState(false);

  // This effect will run on first load before dependencies.
  useEffect(() => {
    console.log('...useEffect runs');
    setTimeout(async () => {
      const randomQuote = await fetchRandomQuote();
      setQuote(randomQuote);
      setFade(false);
      setColor(randomColor());
    }, 700);
    return () => {
      console.log('...useEffect cleanup');
      setFade(true);
    };
  }, [click]);

  const handleClick = () => {
    console.log('Button clicked.')
    setClick(click + 1);
  };

  document.body.style.backgroundColor = color;

  return (
    <>
    <section id='quote-box'>
      <Quote
        quote={quote}
        color={color}
        fade={fade}
      />
      <Buttons
        onClick={handleClick}
        color={color}
      />
    </section>
    {console.log('COMPONENT: <App />')}
    </>
  );
}
