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

//offer
import Offerslist from './screens/offerslist';
import AddOffer from './screens/AddOffers';
import EditOffer from './screens/EditOffer';
import OffersScreen from './screens/offerScreen';
//coming soon pizza
import Csoonpizzaslist from './screens/csoonpizzaslist';
import AddCsoonpizza from './screens/AddCsoonpizza';
import EditCsoonpizza from './screens/EditCsoonpizza';
import CsoonpizzasScreen from './screens/csoonpizzaScreen';
import pizzaBackgroundVideo from './screens/pizza.mp4'; // Adjust the path to the actual location of your video file
import pizzaImage from './screens/115pizza.png';
import EditUser from './screens/EditUser';
function App() {
  return (
    
    <div className="App">
       <video className="background-video" autoPlay loop muted>
      <source src={pizzaBackgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Homescreen />}></Route>
          <Route path="/cart" element={<Cartscreen />}></Route>
          <Route path="/register" element={<Registerscreen />}></Route>
          <Route path="/login" element={<Loginscreen />}></Route>
          <Route path="/orders" element={<Ordersscreen />}></Route>
          <Route path="/csoonpizzas" element={<CsoonpizzasScreen />}></Route>
          <Route path="/offers" element={<OffersScreen />}></Route>
          <Route path="/admin/*" element={<Adminscreen />}></Route>


          <Route path='/admin/userslist' element={<Userslist />} />
          <Route path='/admin/edituser/:useriid' element={<EditUser />} />
          <Route path='/admin/pizzaslist' element={<Pizzaslist />} />
          <Route path='/admin/addpizza' element={<Addpizza />} />
          <Route path='/admin/orderslist' element={<Orderslist />} />
          <Route path='/admin/editpizza/:pizzaid' element={<Editpizza />} />

        {/* profs */}
          <Route path='/admin/offerslist' element={<Offerslist />} />
          <Route path='/admin/addoffer' element={<AddOffer />} />
          <Route path='/admin/editoffer/:offerid' element={<EditOffer />} />
           

            {/* classes */}
            <Route path='/admin/csoonpizzaslist' element={<Csoonpizzaslist />} />
          <Route path='/admin/addcsoonpizza' element={<AddCsoonpizza/>} />
          <Route path='/admin/editcsoonpizza/:csoonpizzaid' element={<EditCsoonpizza />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
