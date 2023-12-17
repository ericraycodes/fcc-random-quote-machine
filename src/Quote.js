import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Quote({ quote, color, fade }) {
  //console.log('<Quote/>:', quote);
  return (
    <div
      className='quote-author-box'
      style={{ opacity: fade ? '0%':'100%', color: color }}
    >
      <div className='quote-container'>
        <FontAwesomeIcon
          className='icon-quote'
          icon={faQuoteLeft}
        />
        <blockquote id='text'>
          {quote['quote']}
        </blockquote>
      </div>
      <span id='author'>- {quote['author']}</span>
      {console.log('COMPONENT: <Quote />')}
    </div>
  );
}
