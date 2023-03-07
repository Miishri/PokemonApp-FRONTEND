import PokemonTable from './pokemons';
import Search from './Search';
import '/src/css/styles.css'

function Home() {
    let form = document.getElementById('searchForm') as HTMLFormElement;


    return (
        <>
        <Search/>
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