import en from "./i18n";

/**
 * Funkcja walidująca adres email i hasło
 * @param {string} email - adres email do walidacji
 * @param {string} password - hasło do walidacji
 * @returns {string|null} - komunikat błędu lub null jeśli walidacja przeszła pomyślnie
 */
export const validateEmailPassword = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return en.ERRORS.EMPTY_EMAIL;
  }
  
  if (!emailRegex.test(email)) {
    return en.ERRORS.INVALID_EMAIL;
  }
  
  if (!password) {
    return en.ERRORS.EMPTY_PASSWORD;
  }
  
  if (password.length < 6) {
    return en.ERRORS.COUNT_PASSWORD;
  }
  
  return null;
};
