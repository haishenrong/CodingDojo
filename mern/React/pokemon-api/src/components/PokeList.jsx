import React, {useState} from 'react';
import axios from 'axios';

const PokeList = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPoke = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response=>response.data)
            .then(response=>setPokemon(response.results))
        /*
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
            .then(res => res.json());
        const pokeList = response.results;
        setPokemon(pokeList);
        */
    }



    return (
        <div>
            <button onClick={fetchPoke}>Fetch Pokemon</button>
            <ul>
                {
                    pokemon.map(item => 
                        <li>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default PokeList;