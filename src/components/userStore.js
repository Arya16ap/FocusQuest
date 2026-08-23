// ==================== User Store ====================

// Persistent username storage using localStorage
const STORAGE_KEY = "focusquest_username";

export const getUsername = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored || "Guest";
};

export const setUsername = (name) => {
  localStorage.setItem(STORAGE_KEY, name);
};

export const clearUsername = () => {
  localStorage.removeItem(STORAGE_KEY);
};

// ==================== User Emails Store ====================

const EMAILS_KEY = "focusquest_emails";

export const getUserEmails = () => {
  const stored = localStorage.getItem(EMAILS_KEY);
  if (!stored) return { studentEmail: "", parentEmail: "", teacherEmail: "", age: "" };
  return JSON.parse(stored);
};

export const setUserEmails = (emails) => {
  localStorage.setItem(EMAILS_KEY, JSON.stringify(emails));
};

export const clearUserEmails = () => {
  localStorage.removeItem(EMAILS_KEY);
};