import './App.css';
import NavBar from './components/NabVar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
        <NavBar/>
        {/*<ItemListContainer />*/}
        <ItemDetailContainer/>
    </>
  );
}

export default App;
