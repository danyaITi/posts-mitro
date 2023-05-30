import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="d-flex align-items-center flex-column">
            <Link to={'/'} className="fs-3 mb-3">
                Home
            </Link>
            <Link to={'/about'} className="fs-5">
                About
            </Link>
        </nav>
    );
};

export default Nav;
