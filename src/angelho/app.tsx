import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Card} from "react-bootstrap";
import {useContext} from "react";
import {actions, context} from "../context/store";
// import {getStorage, ref, getDownloadURL} from "firebase/storage";
import "../assets/css/styles.scss"
import React from "react";

export const App = () => {
    const [state, dispatch] = useContext(context) as any;
    const userName = state.get("userName");
    // const storage = getStorage();
    // const storageRef = ref(storage);
    // const imageRef = ref(storageRef, 'test/1.jpg');
    // const [image, setImage] = useState("");
    // getDownloadURL(imageRef).then((url) => setImage(url));
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        {/*<Card.Img variant="top"*/}
                        {/*          src={image}/>*/}
                        <Card.Body>
                            <Card.Title>{userName}</Card.Title>
                            <Card.Text>
                                probando
                            </Card.Text>
                            <Button variant="primary" onClick={() => dispatch(actions.CHANGE_NAME("perrochango"))}>Cambiar
                                nombre</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

