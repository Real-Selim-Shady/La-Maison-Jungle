import '../styles/Banner.css';


function Banner ({children}) {

    /*const titreBoutique = "La maison jungle";
    return (<h1>{titreBoutique}</h1>) */ //-> ça peut fonctionner comme ça, même si plus long
    
    /* écriture sans props children:
    return (<div className="lmj-banner">
        <img src={logo} alt="La maison jungle logo" className='lmg-logo' />
        <h1 className='lmg-title'>La maison jungle</h1>
        </div>)
    */

    return <div className='lmj-banner'>{children}</div>

}

export default Banner