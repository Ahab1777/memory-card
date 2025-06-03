export default function Card({name, art}){

    return (
        <div className="card">
            <img src={art} alt={name} className="pokemon-img" />
            <h3 className="pokemon-name">
            {name}
            </h3>
        </div>
    )
}