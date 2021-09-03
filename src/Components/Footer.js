import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Inicio</NavLink></li>
                        <li className="nav-item"><NavLink to="/nosotros" className="nav-link px-2 text-muted">Nosotros</NavLink></li>
                        <li className="nav-item"><NavLink to="/acerca-de" className="nav-link px-2 text-muted">Acerca de</NavLink></li>
                        <li className="nav-item"><NavLink to="/personajes" className="nav-link px-2 text-muted">Personajes</NavLink></li>
                    </ul>
                    <p className="text-center text-muted">© 2021 Edier Hernandez, Sena 2021 - Tecnólogo en Analisis y Desarrollo de sistemas de información</p>
                </footer>
            </div>
        </>
    )
}

export default Footer
