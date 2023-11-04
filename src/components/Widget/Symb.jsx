import React from "react"

import { MiniChart  } from "react-ts-tradingview-widgets";
export default function Symb(){
    return(
<MiniChart 
    colorTheme="light"
    width="100%" 
    symbol="OANDA:AUDUSD"
    ></MiniChart>
  )
}