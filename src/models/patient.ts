export interface Patient {
    id: string;
    dateOfBirth: Date;
    allergies: string[];
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    gender: string;
    medicalHistoryList: MedicalHistory[];
}

export interface MedicalHistory {
    date: Date;
    specialty: string;
    medications: string[];
    medicalConditions: string[];
    surgeries: string;
    createdAt: Date;
    updatedAt: Date;
}