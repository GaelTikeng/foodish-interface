import logo from './logo.svg';
import './App.css';
import RefreshButton from './components/atoms/refreshButton/refreshButton';
import Loader from './components/atoms/loader/loader';
import DisplayFoodish from './components/molecules/displayFoodish/displayFoodish';

function App() {
  return (
    <div className="App">
      <Loader/>
      <DisplayFoodish/>
    
    </div>
  );
}

export default App;
