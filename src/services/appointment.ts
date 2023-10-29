import {post} from "./api";

export const setAppointment = (doctorId: string, year: number, month: number,
                               doctorAvailabilityId: string, patientId: string) => {
    const body = {
        doctorId,
        year,
        month,
        doctorAvailabilityId,
        patientId
    };
    return post("/appointments", body);
};