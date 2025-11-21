const express = require('express');
const app = express();
const axios = require('axios');
const router = express.Router();
const PORT = 8888;
const cors = require('cors'); 
/*Tại sao lại có CORS => dùng cors để lấy dữ liệu từ ô input(lấy tên thành phố) mà không cần thông qua cái gì khác*/ 
app.use(cors());

app.get('/basic',async (req,res) => {
const CITY = 'Hue';
const API_KEY = process.env.MY_WEATHER_KEY; 
const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
try {
  const response = await axios.get(url_api);
  const data = response.data;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const feelslike = data.main.feels_like;

  res.json( {
    nhietdo: temp,
    doam: humidity,
    tocdogio: windSpeed,
    camgiacnhu: feelslike,
    city: CITY
  })
} catch (error) {
   console.log(error.message);
}
})

//dùng axios để lấy dữ liệu từ API Openweathermap
app.get('/search', async (req,res) => {
const CITY = req.query.city;
const API_KEY = process.env.MY_WEATHER_KEY; 
const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
try {
  const response = await axios.get(url_api);
  const data = response.data;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const feelslike = data.main.feels_like;
  res.json( {
    nhietdo: temp,
    doam: humidity,
    tocdogio: windSpeed,
    camgiacnhu: feelslike,
    city: CITY
  })
} catch (error) {
  console.log(error.message);
}
})

/*Running SERVER*/ 
app.listen(PORT,() => {
  console.log("SERVER IS RUNNING");
})