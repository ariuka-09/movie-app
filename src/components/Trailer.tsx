"use client"
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export function Trailer ({trailer}:{trailer:string}){
    const [isShow, useIsShow] = useState(false)
    const playTrailer = ()=>{
       useIsShow(!isShow)
      }
    return (<div className="relative">
      
        <button className="absolute" onClick={() =>{playTrailer()}}>
          {isShow && <div>
         <ReactPlayer src={`https://www.youtube.com/watch?v=${trailer}`} />
        </div>}
          Watch Trailer
        </button>
        </div>)
}