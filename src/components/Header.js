import '../styles/Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(prev => !prev);
    };

    return (
       <header className='head'>
            <h2 className='head_title'>IvoireResto</h2>
            <nav className={showNav ? 'show' : ''}>
                <Link to="/" className='navlink'>Accueil</Link>
                <Link to="/about" className='navlink'>A propos</Link>
            </nav>
            <button className='navbt' onClick={toggleNav}>
                <GiHamburgerMenu />
            </button>
       </header>
    )
}

export default Header;