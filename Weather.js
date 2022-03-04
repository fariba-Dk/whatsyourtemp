
import React, { useState } from 'react';

const api = {
  key: '4eec9fe035133d9a436af0a030613a73',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function Weather({ city }) {
  //ALL THE HOOKS
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  //SEARCH FETCH
  async function weatherSearch(evt) {
    if (evt.key === 'Enter' && city) {
      //requesting an API from the weather
      fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setWeather(result);
          //set query to empty string null
          setQuery('');
          // console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()]; //get day
    let date = d.getDate(); //get date
    let month = months[d.getMonth()]; //get month
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className='app'>
      <main>
        <div className='weather'>
          <h1>Welcome To My Weather App</h1>
          <input
            className='search-bar'
            type='text'
            placeholder='search...'
            onChange={(e) => setQuery(e.target.value)}
            //bind the value to the query
            value={query}
            onKeyPress={weatherSearch}
          />
        </div>
        <div className='location-box'>
          <div className='location'>{city}</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          {/* if main exist then serch for temp out of main else it will be undefined */}
          <div className='temp'>{Math.round(weather?.main?.temp)}°c</div>
          {/* <div className='weather'>{weather?.weath.main}</div> */}
        </div>
      </main>
    </div>
  );
}
