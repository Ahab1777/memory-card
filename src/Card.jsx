export default function Card({name, art, onClick}){

    return (
        <div className="card" onClick={onClick}>
            <img src={art} alt={name} className="pokemon-img" />
            <h3 className="pokemon-name">
            {name}
            </h3>
        </div>
    )
}