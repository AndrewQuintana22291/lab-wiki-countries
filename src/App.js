import logo from './logo.svg';
 import './App.css';
 import React from 'react';
 import NavBar from './components/NavBar';
 import CountriesList from './components/CountriesList';
 import CountryDetails from './components/CountryDetails';
 import { BrowserRouter, Route } from 'react-router-dom';
 import countries from './countries.json';

 class App extends React.Component {

   state = {
     countries: countries,
   }

   render() {
     return (
       <div className="App">
         <BrowserRouter>
           <NavBar />
           <div className="container">
             <Route exact path="/" component={CountriesList} />
             <Route path="/countries/:countryCCA3" component={CountryDetails} />
           </div>
         </BrowserRouter>
       </div>
     );
   }

 function App() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
   );
  }

 export default App;
