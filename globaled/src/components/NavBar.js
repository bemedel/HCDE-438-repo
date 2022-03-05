import { Link } from 'react-router-dom';
import { SideMenu } from './SideMenu'

export function NavBar() {
    return (
        <div>
            <SideMenu />
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">GlobalEd</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/resources" class="nav-link">Resources</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    );
}