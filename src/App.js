
import './App.css';
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './components/Results';
import Navbar from './components/Navbar';


const initialSavingsData = [
  { year: 2024, 'United States': 5000000, 'Canada': 4000000, 'Germany': 3000000, 'Australia': 2000000 },
  { year: 2025, 'United States': 10000000, 'Canada': 8000000, 'Germany': 6000000, 'Australia': 4000000 },
  { year: 2026, 'United States': 15000000, 'Canada': 12000000, 'Germany': 9000000, 'Australia': 6000000 },
  { year: 2027, 'United States': 20000000, 'Canada': 16000000, 'Germany': 12000000, 'Australia': 8000000 },
];

const initialSalaryData = [
  { year: 2024, salary: 396000, investment: 2000000 },
  { year: 2025, salary: 432000, investment: 2500000 },
  { year: 2026, salary: 468000, investment: 3000000 },
  { year: 2027, salary: 504000, investment: 3500000 },
];

const App = () => {
  const [savingsData, setSavingsData] = useState(initialSavingsData);
  const [salaryData, setSalaryData] = useState(initialSalaryData);

  const calculateEarnings = (data) => {
    const { currentSalary, loanPercentage, targetCountry, currency } = data;

    // Placeholder logic for demonstration
    const savings = initialSavingsData.map((entry) => ({
      ...entry,
      'United States': entry['United States'] * (currentSalary / 360000),
      'Canada': entry['Canada'] * (currentSalary / 360000),
      'Germany': entry['Germany'] * (currentSalary / 360000),
      'Australia': entry['Australia'] * (currentSalary / 360000),
    }));

    const salaryInvestment = initialSalaryData.map((entry) => ({
      ...entry,
      salary: entry.salary * (currentSalary / 360000),
      investment: entry.investment * (loanPercentage / 50),
    }));

    setSavingsData(savings);
    setSalaryData(salaryInvestment);
  };

  return (
    <div className='main'>
      <Navbar/>
      <div className='calculator'>
    
      <InputForm onInputChange={calculateEarnings} />
      {savingsData && salaryData && (
        <Results savingsData={savingsData} salaryData={salaryData} />
      )}
      </div>
      
    </div>
  );
};

export default App;
