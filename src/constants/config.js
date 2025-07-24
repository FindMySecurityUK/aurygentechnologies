// Firebase Configuration
export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Collection Names
export const COLLECTIONS = {
  CONTACT_FORMS: 'contactForms'
};

// API Endpoints (if needed for future integrations)
export const API_ENDPOINTS = {
  CONTACT_SUBMIT: '/api/contact/submit',
  EMAIL_NOTIFICATION: '/api/email/notify'
};

// App Constants
export const APP_CONSTANTS = {
  SUCCESS_MESSAGE: 'Thank you for your message! We will get back to you soon.',
  ERROR_MESSAGE: 'Sorry, there was an error sending your message. Please try again.',
  LOADING_MESSAGE: 'Sending your message...'
};