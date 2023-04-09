import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark pt-5">

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <Link to="/home" className="nav-link active text-light">INNOVA Resturent</Link>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="text-light">Usefull Link</h5>
                                <ul className="text-light">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Menu</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                            <h5 className="text-light">Link</h5>
                            <ul className="text-light">
                                    <li>Trams and Condition</li>
                                    <li>Policy and Privacy</li>
                                    <li>Contact</li>
                                    <li>Menu</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="bg-secondary">
           
                        <p className="text-center text-light">
                            &copy; Copyright INNOVA Resturent Allright Resurved.
                        </p>
            </div>
        </footer>
    );
}

export default Footer;