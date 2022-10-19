import './App.css';
import NavBar from './components/NabVar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Cart from './containers/CartContainer/CartContainer';

function App() {

  return (
    <BrowserRouter>        
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
