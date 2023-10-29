import {Doctor} from "../../models/doctor";

export const doctor = {
    SET_DOCTORS: (doctors: Doctor[]) => ({
        key: "doctors",
        payload: doctors
    }),
    SELECT_DOCTOR: (doctor: Doctor) => ({
        key: ["doctor", "selectedDoctor"],
        payload: doctor
    }),
    GET_APPOINTMENTS: (payload: any) => ({
        key: ["worker", "appointments"],
        payload: payload
    }),
    SET_APPOINTMENTS: (payload: any) => ({
        key: ["worker", "appointments"],
        payload: payload
    }),

};