import { useEffect, useState } from 'react';
import '/src/css/styles.css'
import axios from 'axios';

let count: number = 0;

function PokemonTable() {
    
    useEffect(() => {
        loadPokemons();
    }, []);
    
    const [mons, setMons] = useState([]);

    const loadPokemons = async () => {
        const response = await axios.get('http://localhost:8081/poke/mons');
        setMons(response.data);
    };

    function loadOnClick(count: number, list: any) {
        let chosen: any = [];
        for(let i = 16 * (count - 1); i < (16 * count); i++) {
            chosen.push(list[i]);
        }
        return chosen;
    }

    const [pokemons, setPokemons] = useState([]);
    const loadPokemonList = async () => {
        let mon =  await loadOnClick(count, mons);
        setPokemons(mon); 
    }

    const span = document.getElementById('countValue') as HTMLSpanElement;

    function decreaseCount() {
        if (count - 1 < 1) {
            count = 1;
        }else {
            count--;
        }
        span.innerText = count.toString();
        loadPokemonList();
    }

    function increaseCount() {
        if (count != 50) {
            count++;
        }
        span.innerText = count.toString();
        loadPokemonList();
    }

    return (
        <>
        <div className="content">
            <table className="pokemons">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" className="type">Type</th>
                        <th scope="col" className="favorite">Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((mon: any) => (
                        <tr key={mon.id}>
                            <td>{mon.name}</td>
                            <td>{mon.typeOne} {mon.typeTwo}</td>
                            <td><button className="add ">+</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="controls">
                <img src="/src/images/back.svg" alt="go back" onClick={decreaseCount}/>
                <span defaultValue={1} id="countValue">{count}</span>
                <img src="/src/images/forward.svg" alt="go next" onClick={increaseCount}/>
            </div>
        </>
    );
}

export default PokemonTable;