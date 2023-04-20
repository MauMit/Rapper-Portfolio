import {createRoot} from 'react-dom/client'
import './css/App.css';
import { EastCoast } from './components/EastCoast';
import { WestCoast } from './components/WestCoast';

//console.log(superHeroes)



function App() {
    return (
      <div>
        <h1>Eastcoast Rappers</h1>
        <EastCoast />
        <h1>Westcoast Rappers</h1>
        <WestCoast />
      </div>
    );
  }



// Test()
// Test2();



const root = createRoot(document.querySelector("#root"));
//root.render (<Test2/>); //Komponenten kan nu skrivas som en html tag;
root.render(<App />);