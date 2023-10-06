import React from 'react'
import loaderstyle from "./Loader.module.css";
export default function Loader() {
  return (
      <div className="maindiv">
          <div className={`${loaderstyle.loader},${loaderstyle.loadericon1} `} ></div>
          <div className={`${loaderstyle.loadericon2},${loaderstyle.loader}`}></div>
          <div className={`${loaderstyle.loadericon3},${loaderstyle.loader}`}></div>
          <div className='loader'>Loading</div>
      </div>
  )
}
