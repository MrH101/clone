import React from 'react'
import './Hro.css'
import imagen from '../../assets/Imagen+1.jpg'


export default function Hro(){
	return(
		<section className = "hro-container">
		<div className="leftside">
		<img src = {imagen} className="hro-img"/>

		</div>

		<div className="rightside" >

		<h3 className="hro-headeing">
		Liv Capital 
		</h3>
		<p className ='hro-text'>
			
			Welcome to LivCapital,the ultimate<br/>
			destination for traders seeking superior<br/>
			performance and innovation. Our comprehensive<br/>
			suite of products, including Copy Trading, Fund<br/>
			Management, and AI Trading, is designed to elevate<br/>
			your trading journey to new heights. Discover how <br/>
			LivCapital can transform your trading experience and <br/>
			help you achieve your financial goals.
		</p>
		</div>
		</section>

		)
}
