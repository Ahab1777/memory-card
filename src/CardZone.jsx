import { useEffect, useState } from "react";
import Card from "./Card"

export default function CardZone({pokemonList, setPokemonList, updateScore, gameEnded, setGameEnded, setRecord, score}){
    const [cards, setCards] = useState(pokemonList)


    //shuffle cards - Fisher-Yates
    function shuffleCards() {
        setCards(prevCards => {
            const shuffled = [...prevCards];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        });
    }

    //toggle isSelected
    function toggleIsSelected(id) {
        setPokemonList(prevList => 
            prevList.map(card => 
                card.id === id ? {...card, isSelected: !card.isSelected} : card
            )
        );
    }

    //update cards when pokemonList updates
    useEffect(() => {
        setCards(pokemonList);
    }, [pokemonList])

    //check win con
    //Check if all cards are selected to confirm that the player won the game
    useEffect(() => {
        if (cards.length > 0 && cards.every(card => card.isSelected)) {
            setGameEnded(true);
            alert("You won!");
        }
    }, [cards, setGameEnded]);

    function handleCardClick(pokemon){
        if(gameEnded){
            return
        }
        if (pokemon.isSelected === true) {
            setGameEnded(true);
            setRecord(score)
            console.log('game has ended')
            return
            //function for displaying final results
        }
        // toggleIsSelected(pokemon.id)
        updateScore()
        shuffleCards()
    }


    return (
        <>
        {pokemonList && (
            <div className="card-zone">
                {cards.map(pokemon => (
                    <Card
                    key={pokemon.id}
                    cardId={pokemon.id}
                    name={pokemon.name}
                    art={pokemon.art}
                    onClick={() => handleCardClick(pokemon)}
                    ></Card>
                ))}
            </div>
        )}
        </>
    )
}