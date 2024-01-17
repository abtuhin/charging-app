import formValidator from '@/utils/formValidator';

describe('formValidator', () => {
  it('should return an empty object for valid form', () => {
    const validFormData = {
      email: 'test@gmail.com',
      password: '1234',
      confirmPassword: '1234',
      firstname: 'test',
      lastname: 'test',
    };

    const result = formValidator(validFormData);

    expect(result).toEqual({});
  });

  it('should return errors for invalid form', () => {
    const invalidFormData = {
      email: 'test',
      password: 'pass',
      confirmPassword: 'password',
      firstname: 'A',
      lastname: 'B',
    };

    const result = formValidator(invalidFormData);

    expect(result).toEqual({
      email: 'Please enter a valid email address',
      confirmPassword: 'Passwords do not match',
      firstname: 'First name must be at least 2 characters',
      lastname: 'Last name must be at least 2 characters',
    });
  });

  it('should return errors for invalid form', () => {
    const invalidFormData = {
      email: 'test',
      password: 'pass',
      confirmPassword: 'password',
      firstname: 'A',
      lastname: 'B',
    };

    const result = formValidator(invalidFormData);

    expect(result).toEqual({
      email: 'Please enter a valid email address',
      confirmPassword: 'Passwords do not match',
      firstname: 'First name must be at least 2 characters',
      lastname: 'Last name must be at least 2 characters',
    });
  });
  
  it('should return Password must be at least 4 characters', () => {
    const invalidFormData = {
      email: 'test@gmail.com',
      password: '11',
      confirmPassword: '11',
      firstname: 'test',
      lastname: 'test',
    };

    const result = formValidator(invalidFormData);

    expect(result).toEqual({
      password: 'Password must be at least 4 characters',
    });
  });
});
