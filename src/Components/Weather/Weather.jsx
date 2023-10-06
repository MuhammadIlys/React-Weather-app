import React, { Component } from 'react'
import weatherstyle from "./Weather.module.css";
import Search from '../Search/Search';
import Result from '../Result/Result';
import axios from 'axios';

export default class Weather extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         lat : "",
         long: "",
         city: "",
         Data: null
      }
    }

    changeHandler = (event) =>{
        const value = event.target.name;

        if (value == "cityname"){
            console.log('city')
        }else if(value == "long"){
            console.log("long")
        }else if(value == "lat"){
            console.log('lat')
        }
    }

  coordinates = (event) => {
    event.preventDefault();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (result)=>{
        setTimeout(() => {
          this.setState({
            lat: result.coords.latitude,
            long: result.coords.longitude
          });

        }, 500);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=dad37189181736026d4a384bec214558`)
        .then((res) => {
            console.log(res.data.name);
            this.setState({
              // city: res.data.name,
              Data:res.data
            })
            console.log(this.state.city)
          }).catch((error)=>{
              console.log(error);
            })
            console.log(this.state.lat);
          },
          (error)=>{
            console.log("error " + error);
          }
      );
    }else{
      console.log("Navigator not found");
    }
  }

  render() {
    return (
        <div className='ps-3 pe-3 mt-5 mb-5'>
        <Search lat={this.state.lat} long={this.state.long} city={this.state.city} data={this.state.Data} coordinates={this.coordinates} change={this.changeHandler} />
        <Result weatherdata={this.state.Data} />
      </div>
    )
  }
}
