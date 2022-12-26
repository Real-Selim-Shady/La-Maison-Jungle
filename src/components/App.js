//import logo from '../logo.svg';
//import '../App.css';

import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App



/*
Comme en HTML, nous pouvons associer des attributs à nos éléments. Les attributs HTML tels que id, href   pour un lien <a />,  src   pour une balise <img />, fonctionnent normalement en JSX.
En revanche, il existe des mots réservés en JavaScript, tels que  class.
Il suffit pour cela d'utiliser l'attribut  className  , et de lui préciser une string. D'ailleurs, vous pouvez utiliser plusieurs classes sur un élément en les mettant à la suite, séparées par un espace.

*/