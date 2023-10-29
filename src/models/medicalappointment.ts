export interface MedicalAppointment {
    id: string;
    doctorAvailabilityId: string;
    patientId: string;
    doctorId: string;
    appointmentStartDate: Date;
    appointmentEndDate: Date;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}

export enum Status {
    PENDING,
    CANCELLED,
    CONFIRMED
}