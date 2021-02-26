import axios from 'axios';
import { UNIVERSITY_GATEWAY_API } from './gateway.config';

async function searchUniversity(textInput) {
  let result = await axios.get(`${UNIVERSITY_GATEWAY_API}/search?name=${textInput}`);
  return result;
}

export const universityService = {
  searchUniversity
};
