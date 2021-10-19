import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../container/container.component';
import logo from '../../assets/imgs/logo.jpg'
import NavbarToggle from './navbar.toogle';
import NavbarList from './navbar.list';



const Navbar = () => {
    const [active, setActive] = useState(false)
    const menuState = () => {
        setActive(!active)
    }
    return (
        <Container>
            <nav className="navbar">
                <div className="flex justify-between w-full md:w-32 items-center">
                    <Link to='/' className='logo w-16 animate'>
                        <div className="flex justify-between content-center">
                        <img src={logo} alt="Main Logo" />
                        <h1 className='self-center font-bold text-primary text-3xl'>Vandal</h1>
                        </div>
                    </Link>
                    <NavbarToggle active={active} menuState={menuState}/>
                </div>
                <div className={`${active ? 'flex' : 'hidden'} md:flex`}>
                    <NavbarList/>
                </div>
            </nav>
        </Container>
    );
}

export default Navbar;