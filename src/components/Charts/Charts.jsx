import React from 'react'
import './charts.css'



const Charts = () => {
return
(
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a>
  </div>
  <p {"symbols": [
    [
      "FX:EURUSD|1D"
    ],
    [
      "FX:USDJPY|1D"
    ],
    [
      "TVC:VIX|1D"
    ],
    [
      "OANDA:AUDUSD|1D"
    ]
  ],
  "chartOnly": false,
  "width": 1000,
  "height": 500,
  "locale": "en",
  "colorTheme": "light",
  "autosize": false,
  "showVolume": false,
  "showMA": false,
  "hideDateRanges": false,
  "hideMarketStatus": false,
  "hideSymbolLogo": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  "fontSize": "10",
  "noTimeScale": false,
  "valuesTracking": "1",
  "changeMode": "price-and-percent",
  "chartType": "area",
  "maLineColor": "#2962FF",
  "maLineWidth": 1,
  "maLength": 9,
  "lineWidth": 2,
  "lineType": 0,
  "dateRanges": [
    "1d|1",
    "1m|30",
    "3m|60",
    "12m|1D",
    "60m|1W",
    "all|1M"
  ]
}>
  </p>
</div>
)}
export default Charts