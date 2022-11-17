import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [hasOverflow, sethasOverflow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const onLogout = () => {
        document.body.classList.remove('overflow_y');
        navigate('/login', { replace: true });
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow_y');
        sethasOverflow(!hasOverflow);
    }

    return (
        <>
            <nav className={ `nav ${hasOverflow ? 'nav_margin' : 'nav_no-margin'}`}>
                <div className='logo'>
                    <Link 
                        className= 'nav_link nav_link-2 nav_link-marvel'
                        to="/marvel"
                    >
                        <img src="../images/marvel2.png" className='nav_logo-marvel' alt="" />
                    </Link>

                    <Link 
                        className='nav_link nav_link-3 nav_link-dc'
                        to="/dc"
                    >
                        <img src="../images/dc.png" className='nav_logo-dc' alt="" />
                    </Link>
                </div>

                <div className={`menu_btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <div className='menu_btn-burger'></div>
                </div> 
                
                <ul className={`ul ${isMenuOpen ? 'ul_open' : ''}`}>
                    <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                    >
                        <Link 
                            className="nav_link nav_link-1" 
                            to="/marvel"
                            onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}
                        >
                            Heroes
                        </Link>
                    </li>

                    <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                        onClick={handleMenuClick}
                    >
                        <NavLink 
                            className= 'nav_link nav_link-2'
                            to="/marvel"
                        >
                            Marvel
                                        
                        </NavLink>
                    </li>

                    <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                        onClick={handleMenuClick}
                    >
                        <NavLink 
                            className='nav_link nav_link-2'
                            to="/dc"
                        >
                            DC
                        </NavLink>
                    </li>

                    <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                        onClick={handleMenuClick}
                    >
                        <div className='search_loop'>
                            <NavLink 
                                className={ ({ isActive }) => {return `nav_link search_link-1 search_link-loop ${ isActive ? 'active' : ''}`} }
                                to='/search'
                            >
                                
                            Search
                                
                        </NavLink>
                            <img src ="../images/search-icon-new.png" className='nav_search-icon' alt="" />
                            
                        </div>
                    </li>

                    <li className={`li ${isMenuOpen ? 'li_open' : ''}`}>
                        <button 
                            className='nav_link nav_button '
                            onClick={onLogout} 
                            
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </>
            
    )
}