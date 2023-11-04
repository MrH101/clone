import React from "react"

import { MiniChart  } from "react-ts-tradingview-widgets";
export default function Symbol(){
    return(
<MiniChart 
    colorTheme="light"
    width="100%" 
    symbol="USDJPY"
    ></MiniChart>
  )
}