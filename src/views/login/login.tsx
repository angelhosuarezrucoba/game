import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import React, {useContext, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import {useNavigate} from "react-router-dom";
import googleLogo from '../../assets/img/googleLogo.svg';
import {actions, context} from "../../context/store";
import {auth} from "../../firebase/firebase";
import "./styles.scss"

export const Login = () => {

    const [state, dispatch] = useContext(context) as any;
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/home");
        }
    }, []);


    const loginWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                const user = result.user;
                localStorage.setItem("userName", user.displayName || "");
                localStorage.setItem("token", token!);
                dispatch(actions.UPDATE_PHOTO(user.photoURL || ""));
                navigate("/home", {replace: true});
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <Container>
            <Row className="vh-100 align-items-center">
                <Col xs={{span: 10, offset: 1}} sm={{span: 8, offset: 2}} md={{span: 4, offset: 4}}
                     xl={{span: 4, offset: 4}}>
                    <Card className="text-center bg-blue login shadow">
                        <Card.Body>
                            <Card.Title>
                                Clinica Angelho
                            </Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Correo</Form.Label>*/}
                                    <Form.Control type="email" placeholder="Email"/>
                                    {/*<Form.Text className="text-muted">*/}
                                    {/*    We'll never share your email with anyone else.*/}
                                    {/*</Form.Text>*/}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    {/*<Form.Label>Password</Form.Label>*/}
                                    <Form.Control type="password" placeholder="Clave" autoComplete={"password"}/>
                                </Form.Group>
                                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                                {/*</Form.Group>*/}
                                <Button variant="primary" type="submit">
                                    Ingresar
                                </Button>
                            </Form>
                            <hr/>
                            <Card className="shadow-sm provider" onClick={loginWithGoogle} role="button">
                                <Card.Body>
                                    <span className="d-flex justify-content-around align-items-center">
                                         <img
                                             alt=""
                                             src={googleLogo}
                                             width="30"
                                             height="30"
                                             className="d-inline-block align-top"
                                         />
                                        Continuar con Google
                                    </span>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}