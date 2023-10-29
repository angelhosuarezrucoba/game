import {Doctor} from "../models/doctor";
import {post} from "./api";

export const getDoctorAvailability = (doctor: Doctor, year?: number, month?: number) => {
    const body = {
        doctorId: doctor?.id,
        year,
        month
    };
    return post("/availability", body);
};