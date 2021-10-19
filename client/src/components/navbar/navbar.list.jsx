import React from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { logout } from '../../data/reducers/auth';
import Button from '../buttons/button.component';
import NavItem from './navbar.item';
const NavbarList = ({history,logout,isAuth}) => {
    const isActive = (history,path)=>{
        if (history.location.pathname === path) {
            return `text-primary`
        }else{
            return ''
        }
    }
    return (
        <ul className='font-bold flex-wrap flex md:mr-5 flex-col md:flex-row text-center'>
            <NavItem link='/' name = 'Home' listStyle={isActive(history,'/')} />
            <NavItem link='/shop' name = 'Shop' listStyle={isActive(history,'/shop')} />
            <NavItem link='/dashboard' name = 'Dashboard' listStyle={isActive(history,'/dashboard')} />
            {isAuth &&(
                <Button title='Signout' moreStyle='hover:text-primary'action={() => {logout()}}/>
            )}
            {!isAuth &&(
                <>
                <Button title='Login' moreStyle='hover:text-primary'
                href='/login'
                isButton={false}/>
                <Button title='Register' moreStyle='hover:text-primary'
                href='/register'
                isButton={false}/>
                </>
            )}
            <Button isButton={false} title='cart' href='cart'moreStyle='text-white uppercase w-24 md:ml-6 bg-primary'/>
        </ul>
    );
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{logout})(withRouter(NavbarList))