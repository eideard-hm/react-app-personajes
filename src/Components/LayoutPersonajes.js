import React from 'react'

const LayoutPersonajes = ({ personajes = [] }) => {
    return (
        <div className="row">
            {personajes.map((personaje, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={personaje.image} alt={personaje.name} />
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>
                            <hr />
                            <p>Especie: {personaje.species}</p>
                            <p>Localización: {personaje.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LayoutPersonajes

