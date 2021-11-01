import React, {useState} from 'react';

const PokeList = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPoke = async () => {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
            .then(res => res.json());
        const pokeList = response.results;
        setPokemon(pokeList);
        //return response.json();
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