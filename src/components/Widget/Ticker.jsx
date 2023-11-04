import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";
import './ticker.css'

export default function Ticker(){
  return(
    <div className = "w-ticker">
      <TickerTape></TickerTape>
    </div>
    )  
}
