// src/components/DisplayPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import DataCard from '../DataCard/DataCard';
import { Link } from 'react-router-dom';
import './DisplayPage.css';

const DisplayPage = () => {
  const formData = useSelector(state => state.form.formData);

  return (
    <div>
      <h1>Submitted Form Data</h1>
      {formData.length > 0 ? (
        formData.map((data, index) => <DataCard key={index} data={data} />)
      ) : (
        <p>No data submitted yet.</p>
      )}
      <button><Link to="/">Back to Form</Link></button>
    </div>
  );
};

export default DisplayPage;
