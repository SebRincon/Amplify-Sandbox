import './App.css';
import { 
  PetCardCollection 
  , NavBar,MarketingFooter
} from './ui-components';


function App() {
  return (
    <div className="App">
      <NavBar width={"100%"} />
      <div className='App-header'>
      <PetCardCollection />
      </div>
      <MarketingFooter  width={"100%"} />
    </div>
  );
}

export default App;

