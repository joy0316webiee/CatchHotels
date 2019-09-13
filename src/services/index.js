import { apiUrl } from '../config';

// List new reservation
const reserveHotels = (mail, service) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mail, service })
  };

  return fetch(`${apiUrl}/reservation`, requestOptions).then(handleResponse);
};

// List all testimonials
const listAllTestimonials = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`${apiUrl}/testimonials`, requestOptions).then(handleResponse);
};

// Write testimonials
// prettier-ignore
const writeTestimonials = ( id, name, surname, mail, review, oldPrice, newPrice, currencyCode) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // prettier-ignore
    body: JSON.stringify({ id, name, surname, mail, review, oldPrice, newPrice, currencyCode })
  };

  return fetch(`${apiUrl}/testimonials`, requestOptions).then(handleResponse);
};

// Subscribe to newsletter
const subscribeNewsletter = mail => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mail })
  };

  return fetch(`${apiUrl}/newsletter`, requestOptions).then(handleResponse);
};

// Write us message
const writeUs = (mail, number, message) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mail, number, message })
  };

  return fetch(`${apiUrl}/writeUs`, requestOptions).then(handleResponse);
};

// List all FAQ
const listAllFAQ = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`${apiUrl}/faq`, requestOptions).then(handleResponse);
};

// Handle response
const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

const services = {
  reserveHotels,
  listAllTestimonials,
  writeTestimonials,
  subscribeNewsletter,
  writeUs,
  listAllFAQ
};

export default services;
