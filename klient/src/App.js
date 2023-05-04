import $ from 'jquery';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'
import Navbar from './components/navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';




import Orderslist from './screens/Orderslist';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Homescreen />}></Route>
          <Route path="/cart" element={<Cartscreen />}></Route>
          <Route path="/register" element={<Registerscreen />}></Route>
          <Route path="/login" element={<Loginscreen />}></Route>
          <Route path="/orders" element={<Ordersscreen />}></Route>
          <Route path='/admin/orderslist' element={<Orderslist />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
