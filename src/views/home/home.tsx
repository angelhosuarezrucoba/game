import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import {Outlet} from "react-router-dom";
import {Header} from "./header/header";
import "../../assets/css/styles.scss"

export const Home = () => {
    useEffect(() => {
        console.log("se reinicio")
    }, []);

    return (
        <>
            <Container className="h-100 p-0" fluid>
            </Container>
        </>
    )
};

