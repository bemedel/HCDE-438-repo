import { NavBar } from './NavBar';
import { Footer } from './Footer';
import "./Resources.css";

export function Resources() {
    return (
        <div>
            <NavBar />
            <div className="text-background4">
                    <h1 className="text-center text-dark">
                        Resources
                    </h1>
            </div>
            <h2 className="m-3 p-3">
                Tools and Toolkits
            </h2>
            <ul className=" list-group p-3 m-3">
                <li className="m-3 list-group-item">
                    <a href="https://unesdoc.unesco.org/ark:/48223/pf0000380256">
                        Welcoming learners with disabilities in quality learning environments: A tool to support countries in moving towards inclusive education, UNESCO, 2021
                    </a>
                </li>
                <li className="m-3 list-group-item">
                    <a href="http://unesdoc.unesco.org/images/0024/002473/247333E.pdf">
                        Mother Tongue-Based Multilingual Education: the Key to Unlocking SDG 4 Quality Education for All, UNESCO Bangkok, 2017
                    </a>
                </li>
                <li className="m-3 list-group-item">
                    <a href="http://unesdoc.unesco.org/images/0024/002432/243279e.pdf">
                        Reaching out to all learners: a resource pack for supporting inclusive education,IBE-UNESCO, 2016
                    </a>
                </li>
                <li className="m-3 list-group-item">
                    <a href="http://unesdoc.unesco.org/images/0013/001375/137522e.pdf">
                        Toolkit for creating inclusive, learning-friendly environments, UNESCO Bangkok, 2015
                    </a>
                </li>
                <li className="m-3 list-group-item">
                    <a href="http://unesdoc.unesco.org/images/0021/002197/219767e.pdf">
                        Opening New Avenues for Empowerment ICTs to Access Information and Knowledge for persons with Disabilities, UNESCO Global Report, 2013
                    </a>
                </li>
            </ul>
            <Footer />
        </div>
    );
}