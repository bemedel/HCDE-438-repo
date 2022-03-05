import "./Footer.css";
import logo from "../img/thumbnail6.png"
import logo1 from "../img/image2.png"
import logo2 from "../img/thumbnail5.png"

export function Footer() {
    return (
        <div>
            <footer>
                <div className="top d-flex justify-content-end">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="side d-flex justify-content-end">
                        <img src={logo1} alt="logo"/>
                        <img src={logo2} alt="logo"/>
                </div>
                2022 All rights reserved
            </footer>
        </div>
    );
}