import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EditBeneficiary.module.css';

const EditBeneficiary = () => {
  const { id } = useParams();  // Get beneficiary ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch the beneficiary data to prefill the form
  useEffect(() => {
    const fetchBeneficiary = async () => {
      try {
        const response = await api.get(`/beneficiaries/${id}`);
        setFormData(response.data); // Prefill the form
      } catch (error) {
        console.error('Error fetching beneficiary:', error);
        setErrorMessage('Failed to fetch beneficiary data.');
      }
    };
    fetchBeneficiary();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/beneficiaries/${id}`, formData);
      setSuccessMessage('Beneficiary updated successfully!');
      setErrorMessage('');
      navigate(`/view/${id}`);  // Redirect to the view page
    } catch (error) {
      console.error('Error updating beneficiary:', error);
      setErrorMessage('Failed to update beneficiary. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.editBeneficiary}>
      <h1>Edit Beneficiary</h1>
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
        <button type="submit">Update Beneficiary</button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default EditBeneficiary;
