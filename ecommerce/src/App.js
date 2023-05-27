import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
