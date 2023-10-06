import React from 'react'
import resultstyle from "./Result.module.css";

export default function Result(props) {
  // console.log("Weather data : " + props.data.main.pressure);

  function KtoC(k) {
    return (k - 273.5).toFixed(2);
  }

  function getTheDate(stamp) {
    const date = new Date(stamp * 1000);
    return date.toLocaleTimeString();
  }
  
  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <table className='table-bordered w-100'>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }} colSpan={2}>
                    <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img>
                    {props.data.name}
                    ( {KtoC(props.data.main.temp)}&deg;C )
                    {props.data.weather[0].description}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr >
                  <th style={{ padding: "10px" }} className="w-50">Feels like</th>
                  <td>{KtoC(props.data.main.feels_like)} &deg;C</td>
                </tr>

                <tr >
                  <th style={{ padding: "10px" }}>Min Temp</th>
                  <td>{KtoC(props.data.main.temp_min)} &deg;C</td>
                </tr>

                <tr >
                  <th style={{ padding: "10px" }}>Max Temp</th>
                  <td>{KtoC(props.data.main.temp_max)} &deg;C </td>
                </tr>

                <tr >
                  <th style={{ padding: "10px" }}>Sunrise</th>
                  <td>{getTheDate(props.data.sys.sunrise)}</td>
                </tr>

                <tr >
                  <th style={{ padding: "10px" }}>Sunset</th>
                  <td>{getTheDate(props.data.sys.sunset)}</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
