import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import './animation.css';

export default function Quote({ quote, color, fadeInStyle }) {
  return (
    <>
      <div className='quote-container' style={fadeInStyle}>
        <FontAwesomeIcon
          className='icon-quote'
          icon={faQuoteLeft}
        />
        <blockquote id='text'>
          {quote['quote']}
        </blockquote>
      </div>
      <span id='author'>- {quote['author']}</span>
      {console.log('<Quote />')}
    </>
  );
}
