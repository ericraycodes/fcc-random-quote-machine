

export default async function fetchRandomQuote() {
  console.log('...fetching a random quote');

  // Fetch API: returns an array of quote objects.
  const quotesArray = await fetch('./quotes.json').catch(e => console.log('fetch error', e))
    .then(res => res.json()).catch(e => console.log('json error', e))
    .then(data => data['quotes']).catch(e => console.log('data error', e));

  // Picking a random quote object through generating a random array index.
  const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  console.log('FETCHED QUOTE:', randomQuote);

  // return
  return randomQuote;

}
