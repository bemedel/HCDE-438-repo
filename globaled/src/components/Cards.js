export function Cards() {
    let src = "https://chonjiacademy.com/wp-content/uploads/2017/04/default-image.jpg"
    return (
        <div>
            <h1 className="text-dark p-3">
                Why GlobalEd
            </h1>
            <p>
                With GlobalEd, it's easy to be a great teacher. Whether you use the GlobalEd web app,
                or even print at home, GlobalEd Resources and materials can always be there when you
                need them. Interactive modular training, 1,000+ GlobalEd Tips, and the thinking behind
                activities, are right at your fingertips!
            </p>
            <div className="row align-items-center">
                <div class="col">
                    <img className="card-img-top img-thumbnail img-fluid" src={src} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Use the Website in your language</h3>
                        <hr/>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Available Languages
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">English</a>
                                <a class="dropdown-item" href="#">Spanish</a>
                                <a class="dropdown-item" href="#">French</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <img className="card-img-top img-thumbnail img-fluid" src={src} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Use the Website in your language</h3>
                        <hr/>
                        <button class="btn btn-outline-primary" type="button">
                                Materials
                        </button>
                    </div>
                </div>

                <div className="col">
                    <img className="card-img-top img-thumbnail img-fluid" src={src} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Use the Website in your language</h3>
                        <hr/>
                            <button class="btn btn-outline-primary" type="button">
                                Put an activity/tip in your bag
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}