import React from 'react';
import { useForm, Controller } from 'react-hook-form';


const InputForm = ({ onInputChange }) => {
  const { control, register, watch } = useForm({
    defaultValues: {
      currentSalary: 360000,
      loanPercentage: 50,
      branchOfStudy: 'Electrical & Electronics',
      targetCountry: ['all'],
      collegeRanking: ['1-50'],
      currency: 'INR',
    },
  });

  const formValues = watch();
  React.useEffect(() => {
    onInputChange(formValues);
  }, [formValues, onInputChange]);

  return (
    <form id="formDiv" >
      <h1 className="heading">
        Estimate Your<br />
        <span style={{ color: '#4e3c86' }}>Future Earnings</span>
      </h1>
      
      <div className="input-group">
        <label htmlFor="loanPercentage">Loan Amount (%)</label>
        <Controller
          name="loanPercentage"
          control={control}
          render={({ field }) => (
            <div className="input-range-container">
              <input type="range" min="0" max="100" step="1" {...field} />
              <span>{formValues.loanPercentage}%</span>
            </div>
          )}
        />
      </div>
      <div className="input-group">
        <label htmlFor="currentSalary">Annual Salary (INR):</label>
        <Controller
          name="currentSalary"
          control={control}
          render={({ field }) => (
            <div className="input-range-container">
              <input type="range" min="100000" max="4000000" step="100000" {...field} />
              <span>{formValues.currentSalary}</span>
            </div>
          )}
        />
      </div>

      <div className="input-group">
        <label htmlFor="branchOfStudy">Target Branch</label>
        <select {...register('branchOfStudy')} id="branchOfStudy">
          <option value="Electrical & Electronics">Electrical & Electronics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="targetCountry">Target Country </label>
        <select {...register('targetCountry')}  id="targetCountry">
          <option value="all">All</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="collegeRanking">College Ranking</label>
        <select {...register('collegeRanking')}  id="collegeRanking">
          <option value="1-50">1-50</option>
          <option value="51-100">51-100</option>
          <option value="101-250">101-250</option>
          <option value="251-500">251-500+</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="currency">Select Currency for Display:</label>
        <select {...register('currency')} id="currency">
          <option value="INR">INR (India)</option>
          <option value="AUD">AUD (Australia)</option>
          <option value="EUR">EUR (Germany)</option>
          <option value="CAD">CAD (Canada)</option>
          <option value="USD">USD (United States)</option>
        </select>
      </div>
    </form>
  );
};

export default InputForm;
