import React from "react"
import useCanvas from "./canvasHook"

export default function Canvas(props){

    const {draw, ...rest} = props
    const canvasRef = useCanvas(draw)

    return(
        <canvas ref={canvasRef} {...rest}/>
    )
}