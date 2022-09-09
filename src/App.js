import './App.css';
import NavBar from './components/NabVar';
import ItemListContainer from './containers/ItemListContainer';
import ProductCard from './components/ItemCount';

function App() {

  //const ropa = ["remeras", "buzos", "pantalones", "camisas",]

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <ItemListContainer greeting={"ILUMINA TU CAMINO!"} />
      <ProductCard/>
      </main>
      <div className="App">
      </div>
    </>
  );
}

export default App;
