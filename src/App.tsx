import './index.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    <ListarCategorias />
    {/* <FormCategoria /> */}
    {/* <DeletarCategoria /> */}
    </>
    
);
}
export default App;