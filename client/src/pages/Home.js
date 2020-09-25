import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-md-8 jumbotron-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card" /*style="width: 18rem;"*/>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
