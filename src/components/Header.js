import { Link } from 'react-router-dom';
import '../components/Header.css';

function Header(props) {
    return(
        <header>
            <h1>Matt's Portfolio Page</h1>
            <nav className='navStyle'>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className='navText'>HOME</div>
                </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                    <div className='navText'>ABOUT</div>
                </Link>
                <Link to='/projects' style={{textDecoration: 'none'}}>
                    <div className='navText'>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;