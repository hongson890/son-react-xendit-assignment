import axios from 'axios';
import { GATEWAY_API } from '../config/api/gateway';

async function searchUniversity(textInput) {
  let result = await axios.get(`${GATEWAY_API}/search?name=${textInput}`);
  return result;
}

export const universityService = {
  searchUniversity
};
