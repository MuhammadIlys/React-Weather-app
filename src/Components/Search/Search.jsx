import React from 'react'
import searchstyle from "./Search.module.css";

export default function Search(props) {
    return (

        <div className="row">
            <div className="col-md-12 col-12">
                <div className="card">
                    <div className="card-body">

                        <form>
                            <div className="row">
                                <div className="mb-3 ">
                                    <button className='float-end mb-3' onClick={props.coordinates}><i className='fa fa-crosshairs'></i></button>
                                </div>
                                <div className="mb-3 col-md-4">
                                    <input type="text" className="form-control" placeholder='City' id="cityname" name='cityname' value={props.city} onChange={props.change} />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <input type="number" className="form-control" placeholder='Latitude' id="lat" name='lat' value={props.lat} onChange={props.change} />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <input type="number" className="form-control" placeholder='Longitude' id="long" name='long' value={props.long} onChange={props.change} />
                                </div>
                                <button type="submit" className="btn btn-dark float-end" onClick={props.submit}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>

    )
}
