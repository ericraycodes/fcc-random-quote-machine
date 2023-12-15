import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Buttons({ onClick }) {
  // The 'href' must be completed for tweeting the fetched quote.
  return (
    <>
    <div className='buttons'>
      <a
        id='tweet-quote'
        href={'twitter.com/intent/tweet' }
        target='_blank'
        style={{backgroundColor: 'gray'}}
      ><FontAwesomeIcon icon={faXTwitter} /></a>
      <button
        id='new-quote'
        onClick={onClick}
      >New quote</button>
    </div>
    {console.log('COMPONENT: <Button />')}
    </>
  );
}
