import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate} from "react-router-dom";
import {context} from "../../../context/store";
import {Menu} from "./menu";
// @ts-ignore
import user from "../../../assets/img/user.svg"
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase/firebase";

import "./header.scss";

export const Header = () => {
    //TODO: remove line 30 gestor
    const [state, dispatch] = useContext(context) as any;
    const userName = state.get("userName");
    const navigate = useNavigate();
    const isLoggedin = true;
    const photoUrl = "";


    const signOutGoogle = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userName")
            navigate("/login");
        });

    }

    return (
        <Navbar bg="blue" expand={false} sticky="top">
            <Container fluid>
                <Navbar.Brand>
                    <img
                        alt="photo"
                        src={photoUrl || user}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{localStorage.getItem("userName") || 'Gestor'}
                </Navbar.Brand>
                <Menu signOut={signOutGoogle}/>
            </Container>
        </Navbar>
    )
};


