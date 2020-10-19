import React from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar center-wrapper col-sm-10 col-md-10 col-lg-8 navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Nathan Szurek</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className={location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"} to="/">Home</Link>
                    <Link className={location.pathname === "/Portfolio" ? "nav-item nav-link active" : "nav-item nav-link"}  to="/Portfolio">Portfolio</Link>
                    {/* <Link className={location.pathname === "/Contact" ? "nav-item nav-link active" : "nav-item nav-link"} to="/Contact">Contact</Link> */}
                </div>
            </div>
        </nav>
    )
}


export default Navbar;