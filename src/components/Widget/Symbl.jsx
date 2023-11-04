import React from "react"

import { MiniChart  } from "react-ts-tradingview-widgets";
export default function Symbl(){
    return(
<MiniChart 
    colorTheme="light"
    width="100%" 
    symbol="TVC:VIX"
    ></MiniChart>
  )
}