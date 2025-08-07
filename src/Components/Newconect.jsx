import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

const Newconect = () => {
  const [email, setEmail] = useState('');
  const [bulkEmails, setBulkEmails] = useState([]);
  const [validationResults, setValidationResults] = useState([]);
  const [validationHistory, setValidationHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('single');
  const [activeView, setActiveView] = useState('current'); // 'current' or 'history'

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('validationHistory');
    if (savedHistory) {
      setValidationHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('validationHistory', JSON.stringify(validationHistory));
  }, [validationHistory]);

  const validateSingleEmail = async (emailToValidate) => {
    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=ee9df6106c2b451bb3d430f8026b15f8&email=${encodeURIComponent(emailToValidate)}`
      );
      return await response.json();
    } catch (err) {
      throw new Error('Failed to validate email');
    }
  };

  const handleSingleValidation = async () => {
    if (!email) {
      setError('Please enter an email address');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await validateSingleEmail(email);
      const resultWithTimestamp = { ...result, timestamp: new Date().toISOString() };
      setValidationResults([resultWithTimestamp]);
      setValidationHistory(prev => [resultWithTimestamp, ...prev]);
    } catch (err) {
      setError('Failed to validate email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBulkUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const emails = text.split('\n')
          .map(email => email.trim())
          .filter(email => email.length > 0);
        setBulkEmails(emails);
      };
      reader.readAsText(file);
    }
  };

  const handleBulkValidation = async () => {
    if (bulkEmails.length === 0) {
      setError('Please upload a file with email addresses');
      return;
    }

    setIsLoading(true);
    setError(null);
    const results = [];

    try {
      for (const email of bulkEmails) {
        const result = await validateSingleEmail(email);
        const resultWithTimestamp = { ...result, email, timestamp: new Date().toISOString() };
        results.push(resultWithTimestamp);
      }
      setValidationResults(results);
      setValidationHistory(prev => [...results, ...prev]);
    } catch (err) {
      setError('Failed to validate some emails. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadResults = () => {
    const resultsToDownload = activeView === 'current' ? validationResults : validationHistory;
    const csvContent = generateCSV(resultsToDownload);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `email-validation-${activeView}-${new Date().toISOString()}.csv`);
  };

  const generateCSV = (results) => {
    const headers = [
      'Email',
      'Timestamp',
      'Deliverability',
      'Quality Score',
      'Is Valid Format',
      'Is Free Email',
      'Is Disposable',
      'Is Role Email',
      'Is Catchall',
      'Is MX Found',
      'Is SMTP Valid'
    ];

    const rows = results.map(result => [
      result.email,
      result.timestamp,
      result.deliverability,
      result.quality_score,
      result.is_valid_format.value,
      result.is_free_email.value,
      result.is_disposable_email.value,
      result.is_role_email.value,
      result.is_catchall_email.value,
      result.is_mx_found.value,
      result.is_smtp_valid.value
    ]);

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all validation history?')) {
      setValidationHistory([]);
      localStorage.removeItem('validationHistory');
    }
  };

  const getStatusColor = (value) => {
    return value ? 'text-success' : 'text-error';
  };

  const getDeliverabilityColor = (deliverability) => {
    switch (deliverability.toUpperCase()) {
      case 'DELIVERABLE': return 'text-success';
      case 'UNDELIVERABLE': return 'text-error';
      default: return 'text-warning';
    }
  };

  const ResultCard = ({ result }) => (
    <div className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold truncate">{result.email}</h3>
          <p className="text-sm text-base-content/70">
            {new Date(result.timestamp).toLocaleString()}
          </p>
        </div>
        <div className={`badge ${result.is_valid_format.value ? 'badge-success' : 'badge-error'} gap-2`}>
          {result.is_valid_format.value ? 'Valid' : 'Invalid'}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="stat bg-base-200/50 rounded-xl p-3">
          <div className="stat-title text-sm">Deliverability</div>
          <div className={`stat-value text-lg ${getDeliverabilityColor(result.deliverability)}`}>
            {result.deliverability}
          </div>
        </div>
        <div className="stat bg-base-200/50 rounded-xl p-3">
          <div className="stat-title text-sm">Quality Score</div>
          <div className="stat-value text-lg text-primary">
            {(parseFloat(result.quality_score) * 100).toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex justify-between">
          <span>MX Records</span>
          <span className={getStatusColor(result.is_mx_found.value)}>
            {result.is_mx_found.text}
          </span>
        </div>
        <div className="flex justify-between">
          <span>SMTP Valid</span>
          <span className={getStatusColor(result.is_smtp_valid.value)}>
            {result.is_smtp_valid.text}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Free Email</span>
          <span className={getStatusColor(result.is_free_email.value)}>
            {result.is_free_email.text}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Disposable</span>
          <span className={getStatusColor(!result.is_disposable_email.value)}>
            {result.is_disposable_email.text}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 lg:p-6 max-w-7xl mx-auto space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="card bg-base-100 shadow-xl p-4 lg:p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Email Validation Dashboard</h1>
        <p className="text-sm lg:text-base text-base-content/70">Validate email addresses instantly with our powerful API</p>
      </div>

      {/* Validation Type Tabs */}
      <div className="tabs tabs-boxed justify-center flex-wrap gap-2">
        <button
          className={`tab tab-sm lg:tab-md ${activeTab === 'single' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('single')}
        >
          Single Email
        </button>
        <button
          className={`tab tab-sm lg:tab-md ${activeTab === 'bulk' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('bulk')}
        >
          Bulk Validation
        </button>
      </div>

      {/* Input Section */}
      <div className="card bg-base-100 shadow-xl p-4 lg:p-6">
        {activeTab === 'single' ? (
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="input input-bordered w-full"
              disabled={isLoading}
            />
            <button
              onClick={handleSingleValidation}
              className={`btn btn-primary w-full sm:w-auto ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Validating...' : 'Validate'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="file"
                accept=".txt,.csv"
                onChange={handleBulkUpload}
                className="file-input file-input-bordered w-full"
                disabled={isLoading}
              />
              <button
                onClick={handleBulkValidation}
                className={`btn btn-primary w-full sm:w-auto ${isLoading ? 'loading' : ''}`}
                disabled={isLoading || bulkEmails.length === 0}
              >
                {isLoading ? 'Validating...' : 'Validate All'}
              </button>
            </div>
            {bulkEmails.length > 0 && (
              <div className="text-sm text-base-content/70">
                {bulkEmails.length} email{bulkEmails.length !== 1 ? 's' : ''} loaded
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="alert alert-error mt-4 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Results Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="tabs tabs-boxed w-full sm:w-auto">
          <button
            className={`tab tab-sm lg:tab-md flex-1 sm:flex-none ${activeView === 'current' ? 'tab-active' : ''}`}
            onClick={() => setActiveView('current')}
          >
            Current Results
          </button>
          <button
            className={`tab tab-sm lg:tab-md flex-1 sm:flex-none ${activeView === 'history' ? 'tab-active' : ''}`}
            onClick={() => setActiveView('history')}
          >
            History
          </button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleDownloadResults}
            className="btn btn-outline btn-primary btn-sm flex-1 sm:flex-none"
            disabled={activeView === 'current' ? validationResults.length === 0 : validationHistory.length === 0}
          >
            Download CSV
          </button>
          {activeView === 'history' && (
            <button
              onClick={clearHistory}
              className="btn btn-outline btn-error btn-sm flex-1 sm:flex-none"
              disabled={validationHistory.length === 0}
            >
              Clear History
            </button>
          )}
        </div>
      </div>

      {/* Results Section */}
      {((activeView === 'current' && validationResults.length > 0) ||
        (activeView === 'history' && validationHistory.length > 0)) && (
        <div className="space-y-4">
          <h2 className="text-lg lg:text-xl font-bold">
            {activeView === 'current' ? 'Validation Results' : 'Validation History'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {(activeView === 'current' ? validationResults : validationHistory).map((result, index) => (
              <ResultCard key={`${result.email}-${result.timestamp}`} result={result} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Newconect;