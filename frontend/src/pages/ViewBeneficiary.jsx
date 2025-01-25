import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';
import styles from './ViewBeneficiary.module.css';

const ViewBeneficiary = () => {
  const { id } = useParams();  // Get beneficiary ID from URL
  const [beneficiary, setBeneficiary] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch the beneficiary data to display
  useEffect(() => {
    const fetchBeneficiary = async () => {
      try {
        const response = await api.get(`/beneficiaries/${id}`);
        setBeneficiary(response.data);
      } catch (error) {
        console.error('Error fetching beneficiary:', error);
        setErrorMessage('Failed to fetch beneficiary data.');
      }
    };
    fetchBeneficiary();
  }, [id]);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className={styles.viewBeneficiary}>
      {beneficiary ? (
        <>
          <h1>Beneficiary Details</h1>
          <p><strong>Name:</strong> {beneficiary.name}</p>
          <p><strong>Age:</strong> {beneficiary.age}</p>
          <p><strong>Gender:</strong> {beneficiary.gender}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewBeneficiary;
