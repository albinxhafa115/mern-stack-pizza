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
import Adminscreen from './screens/Adminscreen';
import Userslist from './screens/Userslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Orderslist from './screens/Orderslist';
import Editpizza from './screens/Editpizza';
import Footer from './components/Footer';



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
          <Route path="/admin/*" element={<Adminscreen />}></Route>


          <Route path='/admin/userslist' element={<Userslist />} />
          <Route path='/admin/pizzaslist' element={<Pizzaslist />} />
          <Route path='/admin/addpizza' element={<Addpizza />} />
          <Route path='/admin/orderslist' element={<Orderslist />} />
          <Route path='/admin/editpizza/:pizzaid' element={<Editpizza />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
