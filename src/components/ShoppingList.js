import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'


    
function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList


/*function ShoppingList () {

    const plantList = [
        "monstera",
        "ficus lyrata",
        "pothos argenté",
        "yucca",
        "palmier"
    ]

    return (<div>
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
    </div>)
}*/



/*
    {plant.isBestSale ? <span>🔥</span> : <span>null</span>}
    {plant.isBestSale ? <span>🔥</span> : null}

    Vous pouvez d'ailleurs chaîner les conditions.

    Si par exemple, vous vouliez afficher le 🔥 pour les plantes qui sont des  isBestSale   ET dans la category classique :

    {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
    De la même manière, si vous aviez voulu que le 🔥 s'affiche à côté des plantes qui sont  isBestSale   OU dans la category classique :

    {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}
    Mais gare à la propreté du code. Si vous avez trop de conditions, je vous conseille de les sortir de ce qui est retourné par votre fonction. 😉
    {plant.isBestSale && <span>🔥</span>}
*/

/*
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                        <PlantItem />
                    </li>
*/