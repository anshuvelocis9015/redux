// components/DataCard.js
import React from 'react';
import './DataCard.css';

const DataCard = ({ data }) => {
    console.log("data card",data);
    return (
        <div className="card">
            <h3>Username: {data?.values?.Username}</h3>
            <p>Firstname: {data?.values?.Firstname}</p>
            <p>Lastname: {data?.values?.Lastname}</p>
            <p>Email: {data?.values?.email}</p>
            <p>Gender: {data?.values?.gender}</p>
            <p>Phone: {data?.values?.Phone}</p>
        </div>
    );
}

export default DataCard;
