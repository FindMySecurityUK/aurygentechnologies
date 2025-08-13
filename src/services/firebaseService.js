import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { isValidPhoneNumber } from 'react-phone-number-input';
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
      website: formData.website || '',
      projectDetails: formData.projectDetails || '',
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
  const requiredFields = ['services', 'budget', 'name', 'email', 'companyName', 'phone', 'hearAbout'];
  
  requiredFields.forEach(field => {
    if (field === 'phone') {
      // Special handling for phone field from react-phone-number-input
      if (!formData[field] || formData[field] === '' || formData[field] === undefined) {
        errors.push('Phone number is required');
      }
    } else {
      if (!formData[field] || formData[field].trim() === '') {
        errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
      }
    }
  });
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formData.email && !emailRegex.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Phone number validation
  if (formData.phone && !isValidPhoneNumber(formData.phone)) {
    errors.push('Please enter a valid phone number');
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
    projectDetails: formData.projectDetails || '',
    contactInfo: {
      name: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      phone: formData.phone,
      website: formData.website || ''
    },
    hearAbout: formData.hearAbout,
    submissionDate: new Date().toISOString()
  };
};

export { db };