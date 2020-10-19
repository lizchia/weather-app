import React from 'react';

import './App.css'

function App() {
  return (
    <div className="">
      <header className="App-header">
      <div class="container my-5 mx-auto">

      <h1 class="text-muted text-center my-4">Weather</h1>

      <form class="change-location my-4 text-center text-muted">
        <label for="city">Enter a location for weather information</label>
        <input type="text" name="city" class="form-control p-4" />
      </form>

      <div class="card shadow-lg rounded">
        <img src="https://via.placeholder.com/400x300" class="time card-img-top" />
        <div class="icon bg-light mx-auto text-center">
          
        </div>
        <div class="text-muted text-uppercase text-center details">
          <h5 class="my-3">City name</h5>
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
  );
}

export default App;
