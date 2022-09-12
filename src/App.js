import './App.css';
import NavBar from './components/NabVar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
    </>
  );
}

export default App;
