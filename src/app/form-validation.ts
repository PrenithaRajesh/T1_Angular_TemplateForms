export function isValidUserId(userId: string): boolean {
    return userId.length==4 && userId[0] === 'U';
}

export function isValidAdminId(adminId: string): boolean {
    return adminId.length==4 && adminId[0] === 'A';
}

export function isValidName(name: string): boolean {
  return name.length > 0;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
    return phone.length == 10;
}

export function isValidGender(gender: string): boolean {
    return gender.length > 0;
}

export function isValidDateOfBirth(dateOfBirth: string): boolean {
  const dateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateOfBirthRegex.test(dateOfBirth);
}

export function isValidAddress(address:{
    street: string;
    city: string;
    state: string;
    zip: string;
}): boolean {
    return address.street.length > 0 && address.city.length > 0 && address.state.length > 0 && address.zip.length == 6;  
}

export function agreeToTerms(agreeToTerms: boolean): boolean {
    return agreeToTerms;
}

export function isValidUserType(userType: string): boolean {
    return userType.length > 0;
}

