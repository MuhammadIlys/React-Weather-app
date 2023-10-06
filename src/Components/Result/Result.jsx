import React from 'react'
import resultstyle from "./Result.module.css";

export default function Result(props) {
  // console.log("Weather data : " + props.weatherdata.name);
  return (
    <div className="row mt-2">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <h3>City</h3>
                    <p>Country</p>
                </div>
            </div>
        </div>
    </div>
  )
}
