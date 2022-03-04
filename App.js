import React, { useState, useCallback } from 'react';
import GoogleMap from './components/GoogleMap.js';
import Weather from './components/Weather';
import Pin from './components/Pin';
import AutoComplete from 'places-autocomplete-react';

export default function App() {
  const [address, setAddress] = useState(null);

  const correct = useCallback((strAddress) => {
    console.log(strAddress)
    //make the api call to weather api with strformatted address
//make a temp set usestate set that tem to the result o fthe api and then pass the state to the werather comp and display it there
    setAddress(strAddress.formattedAddress);
    }, [setAddress]);
    //set temp


  return (
    <>
      <div id='top'>

    
        <Pin/>
      </div>
      <div>
        <AutoComplete
          placesKey='AIzaSyB1fByA0ZCLSYpzyNAlcVJTwIEUNDYuaIE'
          inputId='address'
          setAddress={correct}
          required={true}
        />
        <div id='buttom'>
          <p>{`this is an address sample  ${address}`}</p>
          <Weather city={address} />
        </div>
      </div>
    </>
  );
}
