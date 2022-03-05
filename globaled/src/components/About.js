import { NavBar } from './NavBar';
import { Footer } from './Footer';
import "./About.css";

export function About() {
    return (
        <div>
            <NavBar />
            <div>
                <div className="text-background2">
                    <h1 className="text-center text-light">
                        About Us
                    </h1>
                </div>
                <div className="container">
                    <p class="font-weight-normal p-3 m-2 text-left">
                        For nearly two decades, the Global Partnership for Education has been delivering funds and supporting solutions to build strong and resilient education systems so that more children in lower-income countries, especially girls, get the education they need to thrive and contribute to building a more prosperous and sustainable world.
                    </p>
                    <br />
                    <p class="font-weight-normal p-3 m-2 text-left">
                        We bring together lower-income countries, donors, international organizations, civil society, including youth and teacher organizations, the private sector and private foundations to transform education systems so that all girls and boys, especially those who are marginalized by poverty, displacement or disability, can get a quality education.
                    </p>
                    <br />
                    <p class="font-weight-normal p-3 m-2 text-left">
                        We support the countries with the greatest need: those with high numbers of out-of-school children and weak school completion rates. We focus on reaching the children who are most marginalized and vulnerable, including girls, children with disabilities and those who live in countries characterized by extreme poverty or conflict.
                    </p>
                    <br />
                    <p class="font-weight-normal p-3 m-2 text-left">
                        Our unique model has helped partner countries make significant progress in improving access, learning and equity, and achieve better outcomes for hundreds of millions of boys and girls.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}