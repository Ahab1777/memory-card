import Card from "./Card"

export default function CardZone({pokemonList}){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    return (
        <>
        {pokemonList && (
            <div className="card-zone">
                {pokemonList.map(pokemon => (
                    <Card
                    key={pokemon.id}
                    name={capitalizeFirstLetter(pokemon.name)}
                    art={pokemon.sprites.other["official-artwork"].front_default}
                    ></Card>
                ))}
            </div>
        )}
        </>
    )
}