import axios from 'axios';
import { JSON_GATEWAY_API, UNIVERSITY_GATEWAY_API } from './gateway.config';

export const userService = {
  subscribe,
  login,
  register,
  logOut
};

async function subscribe(email) {
  let result = await axios.request({
    url: `${JSON_GATEWAY_API}/subscription`,
    data: {
      email
    },
    method: 'POST'
  });
  return result;
}

async function login(email, password) {
  let result = await axios.request({
    url: `${JSON_GATEWAY_API}/users?email=${email}&password=${password}`,
    method: 'GET'
  });
  return result;
}

function logOut() {
  localStorage.removeItem('user');
}

async function register(user) {
  let result = await axios.request({
    url: `${JSON_GATEWAY_API}/users`,
    method: 'POST',
    data: user
  });
  return result;
}
