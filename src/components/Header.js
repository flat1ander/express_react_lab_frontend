import { Link } from 'react-router-dom';
import '../components/Header.css';

function Header(props) {
    return(
        <header>
            <h1>Matt's Portfolio Page</h1>
            <nav className='navStyle'>
                <Link to='/'>
                    <div>HOME</div>
                </Link>
                <Link to='/about'>
                    <div>ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;