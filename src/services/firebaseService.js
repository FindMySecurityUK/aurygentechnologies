import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FIREBASE_CONFIG, COLLECTIONS } from '../constants/config';

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);

/**
 * Submit contact form data to Firebase
 * @param {Object} formData - The contact form data
 * @returns {Promise<string>} - Returns the document ID on success
 */
export const submitContactForm = async (formData) => {
  try {
    // Add timestamp and format data
    const contactData = {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'new',
      source: formData.source || 'website'
    };

    // Add document to Firestore
    const docRef = await addDoc(collection(db, COLLECTIONS.CONTACT_FORMS), contactData);
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};

/**
 * Validate form data before submission
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Returns validation result
 */
export const validateFormData = (formData) => {
  const errors = [];
  const requiredFields = ['services', 'budget', 'projectDetails', 'name', 'email', 'companyName', 'hearAbout'];
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`${field} is required`);
    }
  });
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formData.email && !emailRegex.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Format form data for display or storage
 * @param {Object} formData - The raw form data
 * @returns {Object} - Formatted form data
 */
export const formatFormData = (formData) => {
  return {
    services: formData.services,
    budget: formData.budget,
    projectDetails: formData.projectDetails,
    contactInfo: {
      name: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      website: formData.website || ''
    },
    hearAbout: formData.hearAbout,
    submissionDate: new Date().toISOString()
  };
};

export { db };