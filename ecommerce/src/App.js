import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Route, Routes } from 'react-router-dom'
import Product from './modules/Product';
import Products from './modules/Products';
import Contact from './components/Contact';


function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<div>404 NOT FOUND</div>}/>
    </Routes>
   
    </div>
  );
}
export default App;
