
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}



//const {scaleValue, careType} = props
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType


/*
Cela nous permet de déclarer directement nos deux 
variables  scaleValue   et  careType  , et de les assigner aux valeurs passées en props. On peut même directement l'écrire dans les paramètres :

au lieu d'avoir function CareScale(props), alors qu'on veut props.scaleValue et props.scaleType, on aura: function CareScale({scaleValue, careType}) 
*/

function CareScale({scaleValue, careType}) {
    //const scaleValue = props.scaleValue -> on le déclare en propriété, donc on supprime

    const range = [1,2,3];
    const scaleType = careType === 'light' ? (
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


}
    
export default CareScale