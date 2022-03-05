import "./Header.css";

export function Header() {
    return (
        <div className="header">
            <div className="text-background">
                <p className="text-left text-primary">
                    <strong>THE ULTIMATE TEACHER'S TRAINING AND RESOURCE HUB</strong>
                </p>
                <h1 className="display-1">
                    <strong>Hello, <br />Teacher</strong>
                </h1>
                <p>
                    GlobalEd helps you do more in your classroom. Add learning anytime with
                    training about different topics, 1,000+ fun, free activities, and resources.
                </p>
                <button className="btn btn-primary rounded-pill" type="button">
                    Get Started
                </button>
                <button className="btn btn-outline-primary rounded-pill" type="button">
                    Log In
                </button>
            </div>
        </div>
    );
}