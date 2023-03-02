import PokemonTable from './pokemons';
import '/src/css/styles.css'

function Home() {
try {
    const search = document.getElementById('search') as HTMLInputElement;

    console.log(search.value)
}catch (e) {

}

    return (
        <>
        <input type="text" id="search" className="searchBar" placeholder="Search for Pokemon"/>
        <div className="bar">
            <img className="Home" src="/src/images/poke_ball.png" alt="Pokeball"/>  
                         
            <div className="dropdown">
                <a href="">Stats</a>
                <a href="">Link</a>
                <a href="">About</a> 
            </div>  
        </div>
        <PokemonTable />
        </> 
    );
}

export default Home;