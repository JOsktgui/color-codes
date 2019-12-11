import axios from 'axios';

window.fetchGlobalApi = ({ method = 'GET', endpoint = '',  params = {}, data = {}, ...rest }) => {
  if (!endpoint) {
    alert('The "endpoint" parameter is required');
  }

  return axios.request({
    method,
    headers: { 'Content-Type': 'application/json' },
    url: `https://reqres.in/api/${endpoint}`,
    params,
    data,
    ...rest
  })
};
