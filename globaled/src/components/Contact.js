import { NavBar } from './NavBar';
import { Footer } from './Footer';
import "./Contact.css";

export function Contact() {
    return (
        <div>
            <NavBar />
            <div className="text-background3">
                    <h1 className="text-center text-light">
                        Contact Us
                    </h1>
            </div>
            <div className="container">
                <p className="font-weight-normal p-3 m-2 text-left">
                    Reach out to us at globaled@gmail.com
                </p>
                <br />
                <p className="font-weight-normal p-3 m-2 text-left">
                    Phone Number: (555) 555-5555
                </p>
                <p className="font-weight-normal p-3 m-2 text-left">
                    Address: GlobalEd HQ 1234 Main St, Seattle, WA 98105
                </p>
            </div>
            <Footer />
        </div>
    );
}