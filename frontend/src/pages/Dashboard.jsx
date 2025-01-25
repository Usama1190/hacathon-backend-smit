import React, { useEffect, useState } from 'react';
import api from '../api';
import styles from './Dashboard.module.css';

const handleView = (id) => {
    window.location.href = `/view/${id}`;
  };
  
  const handleEdit = (id) => {
    window.location.href = `/edit/${id}`;
  };
  
  const handleDelete = async (id) => {
    try {
      await api.delete(`/beneficiaries/${id}`);
      setBeneficiaries((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error('Error deleting beneficiary:', error);
    }
  };
  

const Dashboard = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await api.get('/beneficiaries');
        setBeneficiaries(response.data);
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Beneficiary Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary) => (
              <tr key={beneficiary.id}>
                <td>{beneficiary.name}</td>
                <td>{beneficiary.age}</td>
                <td>{beneficiary.gender}</td>
                <td>
                  <button onClick={() => handleView(beneficiary.id)}>View</button>
                  <button onClick={() => handleEdit(beneficiary.id)}>Edit</button>
                  <button onClick={() => handleDelete(beneficiary.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
