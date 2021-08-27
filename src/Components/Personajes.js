import { useEffect, useState } from 'react'
import LayoutPersonajes from './LayoutPersonajes';

const Personajes = () => {
    const [personaje, setPersonaje] = useState([])

    const getRickAndMorty = async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        try {
            const req = await fetch(url);
            const data = await req.json();
            setPersonaje(data.results);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRickAndMorty();
    }, [])

    return(
        <>
        <div className="container mt-5">
            <LayoutPersonajes personajes={personaje} />
        </div>
        </>
    )
}

export default Personajes
