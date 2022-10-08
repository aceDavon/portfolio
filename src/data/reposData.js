import axios from 'axios';
import { FeaturedURL, RepoImg } from './featuredcards';

export let dataObj = [];

export const allRepo = async (arr, key) => {
  return arr.map((x) => {
    try {
      axios
        .get(`https://api.github.com/repos/${x}`)
        .then((data) => handleData(data.data, key));
    } catch (error) {
      return console.log(error.message);
    }
    return console.log('data fetching complete');
  });
};

export const handleData = (x) => {
  dataObj = [...dataObj, x];
  // dataObj.push(x);
  const data = dataObj.map((y, i) => {
    const obj = { ...y, live: FeaturedURL[i], repoImg: RepoImg[i] };
    return obj;
  });
  return data;
};
