import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Personajes from '../components/Personajes'
import AboutPage from '../pages/AboutPage'
import DetallePersonaje from '../pages/DetallePersonaje'
import HomePage from '../pages/HomePage'
import NosotrosPage from '../pages/NosotrosPage'
import NotFound from '../pages/NotFound'
import PostsPage from '../pages/PostsPage'

const AppRouter = () => {
    return (
        <Router>
            <Header brand="React App" />
            <Switch>
                <Route path="/acerca-de" component={AboutPage} exact={true} />
                <Route path="/nosotros" component={NosotrosPage} exact={true} />
                <Route path="/personajes" component={Personajes} exact={true} />
                <Route path="/personajes/:id" component={DetallePersonaje} exact={true} />
                <Route path="/posts" component={PostsPage} exact={true} />
                <Route path="/" component={HomePage} exact={true} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
