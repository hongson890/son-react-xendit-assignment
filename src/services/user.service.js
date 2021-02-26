import axios from 'axios';
import { JSON_GATEWAY_API, UNIVERSITY_GATEWAY_API } from './gateway.config';

export const userService = {
  subscribe,
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
