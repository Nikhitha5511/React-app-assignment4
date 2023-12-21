import React from 'react';
import Logo from './logo.png';

const Footer=()=>{
    return(
        <div className='footer'>
            <img src={Logo} alt="logo"></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br></br>Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div className="details">
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="icons">
            <a href="#Header" class="icon-link"><i class="fab fa-facebook"></i></a>
            <a href="#Hedaer" class="icon-link"><i class="fab fa-twitter"></i></a>
            <a href="#Header" class="icon-link"><i class="fab fa-github"></i></a>
            <a href="#Header" class="icon-link"><i class="fab fa-instagram"></i></a>
            <a href="#Header" class="icon-link"><i class="fas fa-basketball-ball"></i></a>
            </div>
        </div>
    )
}
export default Footer;