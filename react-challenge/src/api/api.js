import axios from 'axios';

export default axios.create({
    baseURL: `https://developers.zomato.com/api/v2.1`
})