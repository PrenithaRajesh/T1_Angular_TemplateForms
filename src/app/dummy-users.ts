import { UserOrAdmin } from "./user-input.model";

export const DUMMY_USERS: UserOrAdmin[] = [
  {
    id: "A123",
    name: "Rajesh Krishna",
    email: "rajesh@mufg.in",
    phone: "1234567890",
    gender: "Male",
    dateOfBirth: "1980-01-15",
    address: {
      street: "123 Admin St",
      city: "Admin City",
      state: "Admin State",
      zip: "12345",
    },
    type: "admin",
    permissions: {
      read: true,
      write: true,
      edit: true,
      delete: true,
    },
    adminNotes: "Handles all major administrative tasks.",
    agreeToTerms: true,
  },
  {
    id: "U456",
    name: "Prenitha R",
    email: "prenitha@mufg.in",
    phone: "0987654321",
    gender: "Female",
    dateOfBirth: "1995-06-25",
    address: {
      street: "456 User Lane",
      city: "User City",
      state: "User State",
      zip: "67890",
    },
    type: "user",
    userType: "Individual",
    preferredLanguage: {
      english: true,
      hindi: false,
      kannada: false,
      tamil: false,
    },
    agreeToTerms: true,
  },
];
