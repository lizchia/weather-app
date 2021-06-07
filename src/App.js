import React, {useState, useEffect} from 'react';

import './App.css'


function App() {
  const [city , setCity] = useState('');
  const [cityKey, setCityKey] = useState(0);
  const [detail, setDetail] = useState({});
  
  const keyApi = 'UwBxLkrA0V3EjRDmR85ccshr6t9D8RhI';

  async function getCity() {

    const request = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${keyApi}&q=${city}`;
    const response = await fetch(request + query)
    
    const data = await response.json()
    const cities = new Object(data[0])
    
    setCityKey(cities.Key)
    // console.log(cityKey)
    return cityKey
  }

  async function getWeather() {
    const request = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${keyApi}`;
    const response = await fetch(request + query)

    const data = await response.json()
    const details = new Object(data[0])
    // console.log(data)
    
    return details
  }

  getCity()
    .then((data)=>{return getWeather(data)})
    .then(data=>{setDetail(data)})

  useEffect(()=>{
    
  },[])

  return (
    <>
    <div className="">
      <header className="App-header">
      <div className="container my-5 mx-auto">

      <h1 className="text-muted text-center my-4">Weather</h1>

      <form className="change-location my-4 text-center text-muted">
        <label htmlFor="city">Enter a location for weather information</label>
        <input type="text" name="city" className="form-control p-4" onChange={(event)=>{setCity(event.target.value)}}/>
      </form>

      <div className="card shadow-lg rounded">
        <img src="https://via.placeholder.com/400x300" className="time card-img-top" alt=''/>
        <div className="icon bg-light mx-auto text-center">
          
      </div>
      <div className="text-muted text-uppercase text-center details">
        <h5 className="my-3">{city}</h5>
        <div className="my-3">{detail.WeatherIcon}</div>
        <div className="display-4 my-4">
          <span>temp</span>
          <span>&deg;C</span>
        </div>
      </div>
      </div>
      </div>   
      </header>
    </div>
    </>
  );
}

export default App;
