import React, {useContext} from "react";
import {Card} from "react-bootstrap";
import angelho from "../../../../assets/img/angelho.jpg";
import {actions, context} from "../../../../context/store";
import {Doctor} from "../../../../models/doctor";

export const Doctors = ({doctors}: { doctors: Doctor[] }) => {
    const [state, dispatch] = useContext(context) as any;

    return (
        <>
            {doctors.map(doctor => (
                <Card key={doctor.id}
                      className="d-flex flex-row align-items-center shadow-sm profile"
                      onClick={() => dispatch(actions.SELECT_DOCTOR(doctor))}
                >
                    <Card.Img className="profile-img" src={angelho}/>
                    <Card.Body className="profile-body">
                        <Card.Title>{doctor.firstName}</Card.Title>
                        <Card.Text> {doctor.specialty}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}