
// Generates a random number given a number(n) parameter as maximum range starting from zero.
const randomNumber = (n) => Math.floor(Math.random() * n);


// FETCH API for fetching data from a json file.
async function fetchRandomQuote() {
  console.log('...fetching a random quote');

  // Fetch API: returns an array of quote objects.
  const quotesArray = await fetch('./quotes.json').catch(e => console.log('fetch error', e))
    .then(res => res.json()).catch(e => console.log('json error', e))
    .then(data => data['quotes']).catch(e => console.log('data error', e));

  // Picking a random quote object through generating a random array index.
  const randomQuote = quotesArray[randomNumber(quotesArray.length)];
  console.log('FETCHED QUOTE:', randomQuote);

  // return
  return randomQuote;
}


// Returns a random color from an array.
function randomColor() {

  // Resource for random color options.
  const colors = [
    '#711DB0', '#FFB534', '#88AB8E', '#1640D6', '#3081D0',
    '#994D1C', '#B06161', '#A25772', '#FF5B22', '#B0A695'
  ];

  // return
  return colors[randomNumber(colors.length)];
}

// Export statements
export { fetchRandomQuote, randomColor };
