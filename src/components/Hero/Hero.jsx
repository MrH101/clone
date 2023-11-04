import React from 'react'
import "./Hero.css"
import videoBg from '../../assets/videoBg.mp4'


const Hero = () => {
	return (
		<section className = "hero-wrapper">
			<div className = "vid-container">
				<video src = {videoBg} autoplay loop muted/>
			</div>
			<div className="hero-container">
				<h1 className="hero-heading">Welcome to Liv Capital</h1>
				<p className  ="hero-text">Your one stop online platform<br/>
				for trading and trading tutorials,algorithms and signals</p>
				<button className = "button">
					<a href = "https://go.ironfx.com/visit/?bta=36390&brand=ironfx">Register With Us </a>
				</button>
			</div>
		</section>
 
		)
}
export default Hero