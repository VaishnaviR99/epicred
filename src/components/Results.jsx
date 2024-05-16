// src/components/Results.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const Results = ({ savingsData, salaryData }) => {
  return (
    <div id='graph'>
      <div className='graph1'>
      <h2 style={{color: "#4e3c86"}}>Your Estimated Savings Over the Years</h2>
      <LineChart
        width={600}
        height={300}
        data={savingsData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `₹${value / 1000000}M`} />
        <Tooltip formatter={(value) => `₹${value}`} />
        <Legend />
        <Line type="monotone" dataKey="United States" stroke="#8884d8" />
        <Line type="monotone" dataKey="Canada" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Germany" stroke="#ffc658" />
        <Line type="monotone" dataKey="Australia" stroke="#d0ed57" />
      </LineChart>
      </div>

      <div className='graph2'>
      <h2 style={{color: "#4e3c86"}}>Salary vs. Investment Chart</h2>
      <BarChart
        width={600}
        height={300}
        data={salaryData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `₹${value / 1000000}M`} />
        <Tooltip formatter={(value) => `₹${value}`} />
        <Legend />
        <Bar dataKey="salary" fill="#8884d8" />
        <Bar dataKey="investment" fill="#82ca9d" />
      </BarChart>
      </div>

      
      

     
    </div>
  );
};

export default Results;
