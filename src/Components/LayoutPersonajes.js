import { NavLink } from "react-router-dom"

const LayoutPersonajes = ({ personajes = [] }) => {
    return (
        <div className="row">
            {personajes.map((personaje, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={personaje.image} alt={personaje.name} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{personaje.name}</h5>
                            <hr />
                            <p>Id: {personaje.id}</p>
                            <p>Especie: {personaje.species}</p>
                            <p>Localización: {personaje.location.name}</p>
                        </div>
                        <NavLink to={`personajes/${personaje.id}`} className="btn btn-primary">Ver Detalle</NavLink>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LayoutPersonajes

