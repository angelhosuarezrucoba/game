import es from 'date-fns/locale/es';
import React, {useContext, useEffect, useState} from "react";
// @ts-ignore
import DatePicker, {registerLocale, setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {context} from "../../../../context/store";
import {Doctor} from "../../../../models/doctor";
import {Availability, DoctorAvailability} from "../../../../models/doctoravailability";
import {MedicalAppointment} from "../../../../models/medicalappointment";
import {setAppointment} from "../../../../services/appointment";
import {getDoctorAvailability} from "../../../../services/doctoravailability";
import "./medicalavailability.scss";

registerLocale('es', es)


export const MedicalAvailability = ({doctor}: { doctor: Doctor }) => {

    const [state, dispatch] = useContext(context) as any;
    const [doctorAvailability, setDoctorAvailability] = useState<DoctorAvailability>();
    const [availability, setAvailability] = useState<Date[]>([]);
    const [year, setYear] = useState<number>();
    const [month, setMonth] = useState<number>();
    const [day, setDay] = useState<number>();


    const scheduleAppointment = (date: Availability) => {
        //TODO : unsubscribe
        const appointment = setAppointment(doctor.id, doctorAvailability!.year, doctorAvailability!.month, date.id, "123")
            .subscribe(response => {
                    console.log(response);
                }
            );
    }

    const Dates = () => (
        <ul>
            {
                day ? doctorAvailability?.availabilityList.filter(date => date.day == day).map((date) => {
                    return <li onClick={() => scheduleAppointment(date)} key={date.id}>{date.startTime.toString()}</li>;
                }) : null
            }
        </ul>);

    useEffect(() => {
        if (!doctor) {
            return;
        }
        const doctorAvailabilitySubscription = getDoctorAvailability(doctor, year, month)
            .subscribe((doctorAvailability: DoctorAvailability) => {
                setDoctorAvailability(doctorAvailability);
                setAvailability(doctorAvailability.availabilityList.map(date => new Date(date.startTime)));
            });
        return () => doctorAvailabilitySubscription.unsubscribe();
    }, [doctor]);


    return (
        <>
            <DatePicker
                locale="es"
                inline
                includeDates={availability}
                // selected={startDate}
                onChange={(date: Date) => setDay(date.getDate())}
                // placeholderText="Select a date other than today or yesterday"
            />
            <Dates/>
        </>
    )
}