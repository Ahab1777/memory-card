import { useEffect, useState } from "react";
import CardZone from "./CardZone";

export default function Board(){
    const [pokemonList, setPokemonList] = useState([])
    // Start/Reset button

    // Call Api and feed array
    useEffect(() => {
        //Create a function that feed 12 random number between 1 and 151 and fetch the pokemon data. The number must not repeat;
        const fetchPokemon = async () => {
            const randomNumbers = new Set();
            while (randomNumbers.size < 12) {
                const randomNumber = Math.floor(Math.random() * 151) + 1;
                randomNumbers.add(randomNumber);
            }
            const promises = Array.from(randomNumbers).map(num => 
                fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
                    .then(response => response.json())
            );
            const pokemonData = await Promise.all(promises);
            setPokemonList(pokemonData);
        };
        fetchPokemon();
    }, [])

    return (
        <>
            <CardZone
            pokemonList={pokemonList}
            ></CardZone>        
        </>
    )

}