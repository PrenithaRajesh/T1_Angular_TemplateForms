export const DUMMY_USERS = [
  {
    // Admin Data
    id: "A123",
    name: "Rajesh Krishna",
    email: "rajesh@mufg.in",
    phoneNumber: "1234567890",
    gender: "Male", 
    dateOfBirth: "1980-01-15",
    address: {
      street: "123 Admin St",
      city: "Admin City",
      state: "Admin State",
      zipCode: "12345",
    },
    agreeToTerms: true,
    permissions: ["Read", "Write", "Edit", "Delete"], 
    adminNotes: "Handles all major administrative tasks.",
    type: "admin",
    modifiedAt: new Date().toISOString(),
  },
  {
    // User Data
    id: "U456",
    name: "Prenitha R",
    email: "prenitha@mufg.in",
    phoneNumber: "0987654321",
    gender: "Female", 
    dateOfBirth: "1995-06-25",
    address: {
      street: "456 User Lane",
      city: "User City",
      state: "User State",
      zipCode: "67890",
    },
    agreeToTerms: true,
    userType: "Individual", 
    preferredLanguage: "English", 
    type: "user",
    modifiedAt: new Date().toISOString(),
  },
];
