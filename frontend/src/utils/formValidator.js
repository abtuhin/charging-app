const formValidator = (formData) => {
  const newErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address';
  }
  if (!formData.password || formData.password.length < 4) {
    newErrors.password = 'Password must be at least 4 characters';
  }
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
  }
  if (!formData.firstname || formData.firstname.length < 2) {
    newErrors.firstname = 'First name must be at least 2 characters';
  }
  if (!formData.lastname || formData.lastname.length < 2) {
    newErrors.lastname = 'Last name must be at least 2 characters';
  }

  return newErrors;
};

export default formValidator;