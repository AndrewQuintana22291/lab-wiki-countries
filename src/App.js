import logo from './logo.svg';
import './App.css';
import countries from "./countries.json"; 
function App() {
  return (
    <div className="App">
      Hi
      {
        countries.map((country) => {
          return <h3>{country.name.common}</h3>
        })

      }
    </div>
  );
}

export default App;
