import React, { useState } from 'react';
import api from '../api';
import styles from './AddBeneficiary.module.css';

const AddBeneficiary = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/beneficiaries', formData);
      setSuccessMessage('Beneficiary added successfully!');
      setErrorMessage('');
      setFormData({ name: '', age: '', gender: '' }); // Reset the form
    } catch (error) {
      console.error('Error adding beneficiary:', error);
      setErrorMessage('Failed to add beneficiary. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.addBeneficiary}>
      <h1>Add Beneficiary</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">Add Beneficiary</button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default AddBeneficiary;
