import React, {useState,useEffect} from 'react';

import './App.css'


function App() {
  const [city , setCity] = useState('')
  const [cityKey, setCityKey]= useState(0)
  
  const keyApi = 'UwBxLkrA0V3EjRDmR85ccshr6t9D8RhI';

  async function getCity() {

    const request = new Request('http://dataservice.accuweather.com/locations/v1/cities/search', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    console.log(request)
    const query = `?apikey=${keyApi}&q=${city}`;
    const response = await fetch(request.url + query)
    console.log(response)
    const data = await response.json()
    const cities = data[0]
    const cityKey = cities.Key
    
    setCityKey(cityKey)

    console.log(data)
    
  }

  async function getWeather() {
    const request = new Request('http://dataservice.accuweather.com/currentconditions/v1/', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    
    const query = `${cityKey}?apikey=${keyApi}`;
    const response = await fetch(request.url + query)
    console.log(response)
    const data = await response.json()
    console.log(data)
    
  }
  
  useEffect((city) => {
    getCity((city)=>{
      getWeather(cityKey);
    });
    
  }, [])

  return (
    <>
    <div className="">
      <header className="App-header">
      <div class="container my-5 mx-auto">

      <h1 class="text-muted text-center my-4">Weather</h1>

      <form class="change-location my-4 text-center text-muted">
        <label for="city">Enter a location for weather information</label>
        <input type="text" name="city" class="form-control p-4" onChange={(event)=>{console.log(event.target.value);setCity(event.target.value);console.log(city)}}/>
      </form>

      <div class="card shadow-lg rounded">
        <img src="https://via.placeholder.com/400x300" class="time card-img-top" alt=''/>
        <div class="icon bg-light mx-auto text-center">
          
        </div>
        <div class="text-muted text-uppercase text-center details">
          <h5 class="my-3">{city}</h5>
          <div class="my-3">Weather condition</div>
          <div class="display-4 my-4">
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
