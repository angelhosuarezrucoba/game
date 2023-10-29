import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Menu = ({signOut}: { signOut: () => void }) => {
    return (
        <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`}/>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id={`offcanvasNavbarDropdown-expand-false`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={()=> signOut()}>
                                signOut
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
};

