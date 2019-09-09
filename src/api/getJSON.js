import axios from 'axios';

const getJSON = function(type, searchValue, lang) {
  if (!type || !searchValue || !lang) {
    throw new Error('Some Error text');
  }

  return axios.get(
    `https://api.github.com/search/${type.toLowerCase()}?q=${searchValue}+language:${lang}&sort=stars&order=desc`,
    {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' }
    }
  );
};

export default getJSON;
