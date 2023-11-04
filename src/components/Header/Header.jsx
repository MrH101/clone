import React from 'react'
import "./Header.css"
import Hero from "../Hero/Hero"
import Logo from "../../assets/Logo.png"

const Header = () =>{
	return(
		<section>
		<div className="h-wrapper">
		<div className = "h-container">
			<img src={Logo} alt = "LivCapital" className = "title-logo"/>
		</div>
		<div className = "h-socials">
			<a href = "www.facebook.com">FACEBOOK</a>
			<a href = "www.x.com">TWITTER</a>
			<a href = "www.instagram.com">INSTAGRAM</a>
		</div>
		</div>
		</section>
		)
}
export default Header