import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Nosotros</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Acerca de</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2021 Edier Hernandez, Sena 2021 - Tecnólogo en Analisis y Desarrollo de sistemas de información</p>
                </footer>
            </div>
        </>
    )
}

export default Footer
