import { useEffect, useState } from 'react'
import './linePlot.css'

import Canvas from './canvas'

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export default function LinePlot(props){

    const {xValue, yValue, ...rest} = props;

	const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
		const xPos = scale(xValue, 9, 30, 10, ctx.canvas.width-10)
        const yPos = scale(yValue, 9, 30, 5, ctx.canvas.height-5)
        ctx.arc(xPos, yPos, 15, 0, 2*Math.PI)
        ctx.fill()
    }

	// console.log(props.data)
	return(
		<Canvas draw={draw}/>
	)
}