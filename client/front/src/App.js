import logo from './logo.svg';
import './App.css';
import {NavLink,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
function App() {
  return (
<>
<div className='navbar'>
<h1>Authentification</h1>
<div className='links'>
<NavLink to="/register">register</NavLink>
<NavLink to="/login">login</NavLink>
<NavLink to="/me">products</NavLink>
</div></div>
<div className='content'>
<Routes>
<Route path="/register" element={<Register></Register>}></Route>
<Route path="/login" element={<Login></Login>}></Route>
<Route path="/me" element={<Products></Products>}></Route>
</Routes>
</div>
</>
  );
}

export default App;
