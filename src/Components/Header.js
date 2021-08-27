import React from 'react'

const Header = ({brand}) => {
    return (
        <>
            <header className="header">
                <div className="header__lista contenedor">
                    <a href="/">
                        {brand}
                    </a>
                    <nav className="navegacion">
                        <a href="/">Inicio</a>
                        <a href="/">Acerca de</a>
                        <a href="/">Nosotros</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
