import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import useWebSocket from 'react-use-websocket';
import React, { useState, useCallback, useEffect } from 'react';
import HeaderComponent from "./components/header";
import CardComponent from './components/card';
import LinePlot from './components/linePlot';

const socketUrl = 'ws://localhost:1836';

function App() { 

  const [xCoord, setXCoord] = useState(0)
  const [yCoord, setYCoord] = useState(0)
  const [dataPoints, setDataPoints] = useState([{}, {}, {}, {}, {}, {}])

  const [socketUrl, setSocketUrl] = useState('ws://localhost:1836');

  const { sendMessage, lastMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl)

  useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: () => {
      if (lastMessage) {
        // console.log(lastMessage.data);
        var data = JSON.parse(lastMessage.data);
        setXCoord(data.xPos);
        setYCoord(data.yPos);
        //Put points into current data array
        // setDataPoints(newDataPoints => [{x: data.x, y: data.y}, ...newDataPoints]);
        setDataPoints(newDataPoints => [...newDataPoints, {x: data.xPos, y: data.yPos}]);
        setDataPoints(newDataPoints => newDataPoints.slice(1));
        // console.log(dataPoints)
      }
    }
  });

  return(
      <body>
        <HeaderComponent/>  
        <main className='main'>
          <CardComponent title="Coordinates" cardText1="" >
            X: {(parseFloat(xCoord)/100).toFixed(2)} <br></br>Y: {(parseFloat(yCoord)/100).toFixed(2)}
          </CardComponent>

          <CardComponent title="Coordinate history">
            {dataPoints.map((data) => {
              return(<>X: {(parseFloat(data.x)/100).toFixed(2)} || Y:{(parseFloat(data.y)/100).toFixed(2)}<br></br></>)
            })}
          </CardComponent>

          <CardComponent title="Live plot">
            <LinePlot xValue={(parseFloat(xCoord)/100).toFixed(2)} yValue={(parseFloat(yCoord)/100).toFixed(2)}/>
          </CardComponent>
        </main>
      </body>
  )
}

export default App;
