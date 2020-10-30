import { useState, useEffect } from 'react';
import yelp from '../src/api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);


const searchApi = async () => {
  console.log(term,location);
  try {
    const response = await yelp.get('/search', {
    params: {
      limit: 50,
      term,
      location: 'Sydney'
    }
  });
  console.log(response);
  setResults(response.data.businesses)
  } catch (err) {
    console.log(err);
    setErrorMsg('Something went wrong');
  }
}

  useEffect(() => {
    console.log('hi');
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMsg];
}
