import React, {useContext, useEffect, useState} from "react";
import {Loader} from "../../../components/loader/loader";
import {context} from "../../../context/store";
import {Doctor} from "../../../models/doctor";
import {getDoctors} from "../../../services/doctor";
import {MedicalAvailability} from "./medicalavailability/medicalavailability";
import {Doctors} from "./doctors/doctors";

export const Appointment = () => {

    const [state] = useContext(context) as any;
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const doctor: Doctor = state.getIn(["doctor", "selectedDoctor"]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const doctorSubscription = getDoctors().subscribe(doctors => {
            setDoctors(doctors);
            setLoading(false);
        });
        return () => doctorSubscription.unsubscribe();
    }, []);


    return (
        <>
            <div className="d-flex pt-3 px-3">
                <div className="w-25 border border-1">
                    <Loader isLoading={loading}/>
                    <Doctors doctors={doctors}/>
                </div>
                <div className="w-75 border border-1">
                    <MedicalAvailability doctor={doctor}/>
                </div>
            </div>

        </>
    )
}