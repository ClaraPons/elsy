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
  constructor () {
    super()

    this.state = {
      water:0,
      heart:120,
      temperature: -10,
      steps:3000,
    }

}

onHeartChange = (e) => {
  this.setState({
    heart: e.target.value
})
this.calculateWater()
this.gradientWater()
}
  
onStepsChange = (e) => {
  this.setState({
    steps: e.target.value
})
this.calculateWater()
this.gradientWater()

}

onTempChange = (e) => {
  this.setState({
    temperature: e.target.value
})
this.calculateWater()
this.gradientWater()

}

calculateWater = () => {
    let waterChange = 1.5
    if(this.state.temperature >= 20){
      waterChange += (this.state.temperature - 20) * 0.02
      this.setState({
        water: waterChange.toFixed(2),
      })
    }
    if (this.state.heart >= 120) {
      waterChange += (this.state.heart - 120) * 0.0008
      this.setState({
        water: waterChange.toFixed(2)
      })
    }
    if (this.state.steps >= 10000){
      waterChange += (this.state.steps - 10000) * 0.00002
      this.setState({
        water: waterChange.toFixed(2)
      })
      console.log(this.state.water)
    }
}

gradientWater = () => {

  if(this.state.water <= 1.5){
    this.setState({
      linearGradient: "#f1f9ff"
    })
  } 
  if(this.state.water >= 1.6){
    this.setState({
      linearGradient: "#d5edff"
    })
  } 
  if(this.state.water >= 1.7){
    this.setState({
      linearGradient: "#b8e1ff"
    })
  }
  if(this.state.water >= 1.8){
    this.setState({
      linearGradient: "#94c3ed"
    })
  }
  if(this.state.water >= 1.9){
    this.setState({
      linearGradient: "#83b4e4"
    })
  }
  if(this.state.water >= 2){
    this.setState({
      linearGradient: "#5f96d2"
    })
  }
  if(this.state.water >= 2.1){
    this.setState({
      linearGradient: "#4d87c9"
    })
  }
  if(this.state.water >= 2.2){
    this.setState({
      linearGradient: "#3b78c0"
    })
  }
  if(this.state.water >= 2.3){
    this.setState({
      linearGradient: "#064aa4"
    })
  }
}


  render(){

    console.log(this)

    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box
          icon =  "local_drink"
          color =  {this.state.linearGradient}
          value =  {this.state.water}
          unit =  "L"
          onChangeWater = {this.calculateWater}
          />
          {/* Steps */}
          <Box
          icon =  "directions_walk"
          color =  "black"
          value =  {this.state.steps}
          unit =  "Steps"
          min = {stepsMin}
          max = {stepsMax}
          onChange = {this.onStepsChange}

          />
          {/* Heart */}
          <Box
          icon =  "favorite"
          color =  "red"
          value =  {this.state.heart}
          unit =  "bpm"
          min = {heartMin}
          max = {heartMax}
          onChange = {this.onHeartChange}
          />
          {/* Temperature */}
          <Box
          icon =  "wb_sunny"
          color =  "yellow"
          value =  {this.state.temperature}
          unit =  "°C"
          min = {tempMin}
          max = {tempMax}
          onChange = {this.onTempChange}
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