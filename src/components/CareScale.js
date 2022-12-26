
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale

//return <div>{scaleValue}☀️</div>

/*
return (<div>
            {
                range.map((rangeElem)=>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null 
                //pourquoi on passe la range en string, quelle nécessitée? -> pour passer au même niveau les données?
                //pourquoi dans le if, il faut préciser > dans >= pour que la range soit bien exacte?
                //ici la key rangeElem donne le nombre d'éléments, scaleType précise l'élément à afficher
            )}
        </div>)
*/

/*
                Comme vous l'avez vu ici, nous avons utilisé deux syntaxes différentes pour nos props. Pour  scaleType, nous lui avons assigné une  string, entre guillemets. 
                En revanche, pour  scaleValue, nous lui avons attribué la valeur d'un objet, que nous avons passée entre accolades.
            */


