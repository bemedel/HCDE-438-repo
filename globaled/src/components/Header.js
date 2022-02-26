import "./Header.css";

export function Header() {
    return (
        <div className="header">
            <h2 className="text-left">
                The Ultimate Teacher's Training and Resource Hub
            </h2>
            <h1>
                Hello, Teacher
            </h1>
            <p>
                GlobalEd helps you do more in your classroom. Add learning anytime with
                training about different topics, 1,000+ fun, free activities, and resources.
            </p>
            <button className="btn btn-outline-primary" type="button">
                Get Started
            </button>
            <button className="btn btn-outline-primary" type="button">
                Log In
            </button>
        </div>
    );
}