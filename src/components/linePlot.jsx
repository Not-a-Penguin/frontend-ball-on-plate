import { useEffect, useState } from 'react'
import './linePlot.css'

import Canvas from './canvas'

export default function LinePlot(props){

	const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
		
        ctx.arc(150, 70, 10, 0, 2*Math.PI)
        ctx.fill()
    }

	// console.log(props.data)
	return(
		<Canvas draw={draw}/>
	)
}