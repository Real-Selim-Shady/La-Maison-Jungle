//import logo from '../logo.svg';
//import '../App.css';
import Banner from './Banner';
import Footer from './Footer'
//import Cart from './Cart';
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";

function App() {
  return (<div>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    {/*<Cart />*/}
    <ShoppingList />
    <Footer />
    </div>);
}

export default App;


/*
Comme en HTML, nous pouvons associer des attributs à nos éléments. Les attributs HTML tels que id, href   pour un lien <a />,  src   pour une balise <img />, fonctionnent normalement en JSX.
En revanche, il existe des mots réservés en JavaScript, tels que  class.
Il suffit pour cela d'utiliser l'attribut  className  , et de lui préciser une string. D'ailleurs, vous pouvez utiliser plusieurs classes sur un élément en les mettant à la suite, séparées par un espace.

*/