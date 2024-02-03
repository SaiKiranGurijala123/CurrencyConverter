import logo from './logo.svg';
import './App.css';
import CurrencyCalculation from '../src/components/CurrancyHandling/CurrencyCalculation'
import NavBar from './components/Header/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Authentication/Register';
import Footer from '../src/components/Footer/Footer'



function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<CurrencyCalculation/>} ></Route>
        
        
      </Routes>
      

      </BrowserRouter>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
