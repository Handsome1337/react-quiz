import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-785e4.firebaseio.com/'
});