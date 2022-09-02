import './App.css';
import Pepe from './components/NabVar';
import ItemListContainer from './containers/ItemListContainer';
function App() {

  const ropa = ["remeras", "buzos", "pantalones", "camisas",]

  return (
    <>
      <header>
        <Pepe productos={ropa} />
        <ItemListContainer greeting={"ILUMINA TU CAMINO!"} />
      </header>
      <div className="App">
      </div>
    </>
  );
}

export default App;
