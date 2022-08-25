import axios from 'axios';
import { FeaturedRepoImg, FeaturedURL, RepoImg } from './featuredcards';

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

const handleData = (x, keys) => {
  dataObj = dataObj.concat(x);
  dataObj.map((y, i) => {
    y.live = FeaturedURL[i];
    y.repoImg = RepoImg[i];
  });
  localStorage.setItem(keys, JSON.stringify(dataObj));
  return dataObj;
};
