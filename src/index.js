import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
  There two pieces of state:
    1. random quote with author
    2. random theme color to each random quote
*/


/* FCC Random Quote Machine */

// REACT
function App() {
  return (
    <section id='quote-box'>
      <blockquote id='text'>
        <span className='double-quote'>&quot;</span>
        This is a random quote.
      </blockquote>
      <span id='author'>- Author</span>
      <button id='new-quote'>New quote</button>
      <a
        id='tweet-quote'
        href='twitter.com/intent/tweet'
        target='_blank'
      >Tweet</a>
    </section>
  );
}
