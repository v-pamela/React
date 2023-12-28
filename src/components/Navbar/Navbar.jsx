import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const NavBar = () => {
    return (
      <nav className="container">
        <Link to='/'> 
          <h2>OfertasYa</h2>
        </Link>

        <div className="barra">
          <Button><NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink></Button>
          <Button><NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink></Button>
          <NavLink to={`/category/notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button variant='contained'>Notebook</Button></NavLink>
          
        </div>
        <CartWidget />
      </nav>
    );
}

export default NavBar
