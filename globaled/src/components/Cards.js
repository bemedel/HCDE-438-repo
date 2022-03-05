import "./Cards.css";

export function Cards() {
    let src = "https://images.unsplash.com/photo-1624384897936-f0976c16c7ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    let src1 = "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80";
    let src2 = "https://images.unsplash.com/photo-1579338779120-18de2051fbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    return (
        <div className="m-4">
            <h1 className="display-1 p-3">
                <strong>Why GlobalEd</strong>
            </h1>
            <p className="text-left m-4">
                With GlobalEd, it's easy to be a great teacher. Whether you use the GlobalEd web app,
                or even print at home, GlobalEd Resources and materials can always be there when you
                need them. Interactive modular training, 1,000+ GlobalEd Tips, and the thinking behind
                activities, are right at your fingertips!
            </p>
            <div className="row mx-auto p-3">
                <div class="col shadow col-sm-3 m-3 mx-auto">
                    <img className="card-img-top img-thumbnail img-fluid" src={src} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Use the Website in your language</h3>
                        <hr/>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                <div className="col shadow col-sm-3 m-3 mx-auto">
                    <img className="card-img-top img-thumbnail img-fluid" src={src1} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Materials for<br /> Classroom</h3>
                        <hr/>
                        <button class="btn btn-outline-primary" type="button">
                                Check it out
                        </button>
                    </div>
                </div>

                <div className="col shadow col-sm-3 m-3 mx-auto">
                    <img className="card-img-top img-thumbnail img-fluid" src={src2} alt="Default" />
                    <div className="card-body" >
                        <h3 className="card-title">Put an activity/tip in your bag</h3>
                        <hr/>
                            <button class="btn btn-outline-primary" type="button">
                                Download and Print
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}