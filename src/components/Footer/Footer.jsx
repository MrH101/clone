import React from 'react'
import './footer.css'
import Logo from '../../assets/Logo.png'

export default function Footer(){
	return(
	<div className="footer-wrapper">
	<div className = "footer-container-one">
		<h1 className="f-head">Contact-Us</h1>
		<p className="fmailto">info@livcapital.com</p>
	</div>
	<div className = "footer-container-two">
		<img src = {Logo} className = "f-logo"/>
	</div>
	</div>
)}