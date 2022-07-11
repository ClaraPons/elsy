import React from "react";
import "./App.css"
import Box from "./components/Box";
import "./styles/global.css"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render(){

    console.log(this)

    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box
          icon =  "local_drink"
          color =  "#3A85FF"
          value =  {1.5}
          unit =  "L"
          />
          {/* Steps */}
          <Box
          icon =  "directions_walk"
          color =  "black"
          value =  {3000}
          unit =  "Steps"
          />
          {/* Heart */}
          <Box
          icon =  "favorite"
          color =  "red"
          value =  {120}
          unit =  "bpm"
          />
          {/* Temperature */}
          <Box
          icon =  "wb_sunny"
          color =  "yellow"
          value =  {-10}
          unit =  "°C"
          />
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;