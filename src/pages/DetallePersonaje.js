import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";

const DetallePersonaje = () => {

    const [dataPersonaje, setDataPersonaje] = useState([]);

    const { id } = useParams();
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        const getDatApi = async () => {
            try {
                const req = await fetch(url);
                const data = await req.json();
                setDataPersonaje(data);
            } catch (error) {
                console.log(error)
            }
        }
        getDatApi();
    }, [url])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col mb-4">
                    <div className="card" style={{ maxWidth: "350px" }}>
                        <img src={dataPersonaje.image} alt={dataPersonaje.name} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{dataPersonaje.name}</h5>
                            <hr />
                            <p>Id: {dataPersonaje.id}</p>
                            <p>Especie: {dataPersonaje.species}</p>
                            <p>Estado: {dataPersonaje.status}</p>
                            <p>URL: {dataPersonaje.url}</p>
                        </div>
                        <NavLink to="/personajes" className="btn btn-primary">Ver todos los personajes</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetallePersonaje
