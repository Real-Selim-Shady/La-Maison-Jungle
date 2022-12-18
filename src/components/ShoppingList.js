
import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem"


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
    

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList;