import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = ({ brand }) => {
    return (
        <>
            <header className="header">
                <div className="header__lista contenedor">
                    <NavLink to="/">
                        {brand}
                    </NavLink>
                    <nav className="navegacion">
                        <NavLink to="/" exact={true}>Inicio</NavLink>
                        <NavLink to="/acerca-de">Acerca de</NavLink>
                        <NavLink to="/nosotros">Nosotros</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/personajes">Personajes</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
