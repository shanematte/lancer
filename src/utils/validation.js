export function validationPhone(phone) {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
}

export function EmailVerification(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

export function PasswordVerification(newPassword) {
  return /^[a-zA-Z0-9_\-!@#$%^&*]{6,18}$/.test(newPassword);
}
