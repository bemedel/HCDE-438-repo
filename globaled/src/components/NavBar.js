import { Link } from 'react-router-dom';
import { SideMenu } from './SideMenu'

export function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                    <SideMenu />
                    <p class="navbar-brand">GlobalEd</p>
                    <ul className="row align-items-start">
                        <div className="col">
                            <li class="nav-item">
                                <Link to="/" className="link-info"><h1 className="text-dark">Home</h1></Link>
                            </li>
                        </div>
                        <div className="col">
                            <li class="nav-item">
                                <Link to="/about" className="link-info"><h1 className="text-dark">About</h1></Link>
                            </li>
                        </div>
                        <div className="col">
                            <li class="nav-item">
                                <Link to="/contact" className="link-info"><h1 className="text-dark">Contact</h1></Link>
                            </li>
                        </div>
                        <div className="col">
                            <li class="nav-item">
                                <Link to="/resources" className="link-info"><h1 className="text-dark">Resources</h1></Link>
                            </li>
                        </div>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav>
        </div>
    );
}