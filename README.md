# Pokemon memory game for The Odin Project

- Structure:
    - Start/reset button
    - Grab 12 random pokemons of the the first generation (151) from PokeAPI
    - Array for managing pokemon already clicked
    - Function - Display a card for each pokemon on random locations
    - Scoreboard for current run and record

- Components
    - Board
        -Scoreboard
        -CardZone:
            Cards

- API reponse structure
    - Pokemon object propertires:
        name: name
        picture: sprites.other["official-artwork"].front_default
        id: id