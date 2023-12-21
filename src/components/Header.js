import React from 'react';

const Header=()=>{
    return(
        <div className='navbar'>
        <div class='logonav'>
        <img src="https://flowbite.com/docs/images/logo.svg" alt='logo'></img>
        <h2>GeekFoods</h2>
        </div>
        <div className='ullist'>
            <ul>
                <li style={{color:'#1D4ED8'}}>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className='navButton'>Get started</button>
        </div>
        <div className="menuicon">
        <i class="fas fa-bars"></i>
        </div>
        </div>
    )
}

export default Header;