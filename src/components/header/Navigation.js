import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    NavTroggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" container="xl" expand="sm">
                    <NavbarBrand href="/">INNOVA Resturent</NavbarBrand>
                    <NavbarToggler onClick={this.NavTroggle}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/home" className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;