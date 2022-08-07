import axios from 'axios';
import { RepoLinks } from './featuredcards';

export let dataObj = [];

export const allRepo = async () => {
  return RepoLinks.map((x) => {
    try {
      axios
        .get(`https://api.github.com/repos/${x}`)
        .then((data) => handleData(data.data));
    } catch (error) {
      return console.log(error.message);
    }
    return console.log('data fetching complete');
  });
};

const handleData = (x) => {
  dataObj = dataObj.concat(x);
  dataObj.map((y, i) => {
    y.imgId = i;
  });
  localStorage.setItem('github-repos', JSON.stringify(dataObj));
  return dataObj;
};
