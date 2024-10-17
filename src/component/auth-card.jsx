import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './button';
import '../style/auth-card.css';

function AuthCard({ type, onSubmit }) {
  const isSignup = type.toLowerCase() === 'signup';
  const inputDivClass = isSignup ? 'input-div input-div-signup' : 'input-div input-div-login';

  const [formValues, setFormValues] = useState({
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.password) newErrors.password = 'Password is required';
    if (isSignup && formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const endpoint = isSignup ? '/api/users/' : '/api/users/login';
        const response = await fetch(`http://localhost:8000${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formValues.name,
            password: formValues.password,
          }),
        });
        const data = await response;
        if (response.ok) {
          const data = await response;
          // Redirect to index.html
          window.location.href = '/index.html';
        } else {
          const data = await response;
          console.error('Error:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='main-card'>
      <h3 id='loginText'>{isSignup ? 'Signup' : 'Login'}</h3>
      <form onSubmit={handleSubmit}>
        <div className={inputDivClass}>
          <div className='field'>
            <label htmlFor='name'>User Name </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && <span className='error-message'>{errors.name}</span>}
          </div>
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={formValues.password}
              onChange={handleChange}
            />
            {errors.password && <span className='error-message'>{errors.password}</span>}
          </div>
          {isSignup && (
            <div className='field'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='Enter password again'
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className='error-message'>{errors.confirmPassword}</span>}
            </div>
          )}
        </div>
        <div className='btn'>
          <Button act={handleSubmit} value={type} />
        </div>
      </form>
    </div>
  );
}

AuthCard.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthCard;
