// Email validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password validation - minimum 8 characters, at least 2 types: letters, numbers, special chars (except " and ')
export function isValidPassword(password) {
  if (password.length < 8) return false

  const hasLetter = /[a-zA-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};:,.<>?\\|`~]/.test(password)

  const typeCount = [hasLetter, hasNumber, hasSpecial].filter(Boolean).length
  return typeCount >= 2
}

// Phone validation - Japanese format
export function isValidPhone(phone) {
  const phoneRegex = /^(?:0\d{1,4}-?\d{1,4}-?\d{4}|090-?\d{4}-?\d{4})$/
  return phoneRegex.test(phone)
}

// Cafe name validation
export function isValidCafeName(name) {
  return name.trim().length >= 2 && name.trim().length <= 100
}

// Address validation
export function isValidAddress(address) {
  return address.trim().length >= 5 && address.trim().length <= 200
}

// URL validation
export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Time format validation (HH:MM)
export function isValidTime(time) {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return timeRegex.test(time)
}
