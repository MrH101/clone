import React from "react"
import "./services.css"

export default function Services(props){
	return(
		<section className="s-wrapper">
			<div>
				<img src ={`../../assets/${props.image}`}/>
				<p>{props.name}</p>
			</div>
		</section>
		)
}
