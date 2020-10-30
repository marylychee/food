import axios from 'axios';


export default axios.create({
  // CORS work around as this should be retreiving from a back end and we are only building a client side
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer XnDecselUlY4-lzELzYkbjz6kB4EOQSklxCe3-BTGv5unlc2nb3-GlS5yFZVBNmMjMou0mRzJyqNO88kAjHXTwehcQiKsC_F7AF-g4ebhDCrk8MelvJ4dGUJx5CbX3Yx',
    "Access-Control-Allow-Origin":"*",
  }
})
