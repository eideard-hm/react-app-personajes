import Header from './Components/Header'
import Footer from './Components/Footer'
import Personajes from './Components/Personajes'
import './App.css';

const App = () => {
  return (
    <>
      <Header brand="React App" />
      <Personajes />
      <hr />
      <Footer />
    </>
  )
}

export default App;
