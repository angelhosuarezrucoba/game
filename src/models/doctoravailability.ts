export interface DoctorAvailability {
    id: string;
    doctorId: string;
    availabilityList: Availability[];
    year: number;
    month: number; // 1-12
}

export interface Availability {
    id: string;
    day: number; // 1-31
    startTime: Date;
    endTime: Date;
    available: boolean;
}