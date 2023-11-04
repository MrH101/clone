import React from 'react'

export default function Principles(props){
	return(
			<div className = "p-image">
				<img src={`../../assets/${props.image}`} alt ="missing-img" className="p-img" />
				<p className = "pr-text">{props.description}</p>
			</div>
		)
}