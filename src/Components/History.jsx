import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

const History = () => {
  const [validationHistory, setValidationHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'status'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  useEffect(() => {
    const savedHistory = localStorage.getItem('validationHistory');
    if (savedHistory) {
      setValidationHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleDownload = () => {
    const csvContent = generateCSV(validationHistory);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `email-validation-history-${new Date().toISOString()}.csv`);
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

  const filteredHistory = validationHistory
    .filter(result => 
      result.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return sortOrder === 'desc'
          ? new Date(b.timestamp) - new Date(a.timestamp)
          : new Date(a.timestamp) - new Date(b.timestamp);
      } else {
        return sortOrder === 'desc'
          ? b.quality_score - a.quality_score
          : a.quality_score - b.quality_score;
      }
    });

  const ResultCard = ({ result }) => (
    <div className="card bg-base-100 shadow-xl p-4 lg:p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3 lg:mb-4">
        <div className="space-y-1">
          <h3 className="text-base lg:text-lg font-bold truncate max-w-[200px] sm:max-w-[250px]">{result.email}</h3>
          <p className="text-xs lg:text-sm text-base-content/70">
            {new Date(result.timestamp).toLocaleString()}
          </p>
        </div>
        <div className={`badge ${result.is_valid_format.value ? 'badge-success' : 'badge-error'} gap-1 text-xs lg:text-sm`}>
          {result.is_valid_format.value ? 'Valid' : 'Invalid'}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
        <div className="stat bg-base-200/50 rounded-xl p-2 lg:p-3">
          <div className="stat-title text-xs lg:text-sm">Deliverability</div>
          <div className={`stat-value text-base lg:text-lg ${getDeliverabilityColor(result.deliverability)}`}>
            {result.deliverability}
          </div>
        </div>
        <div className="stat bg-base-200/50 rounded-xl p-2 lg:p-3">
          <div className="stat-title text-xs lg:text-sm">Quality Score</div>
          <div className="stat-value text-base lg:text-lg text-primary">
            {(parseFloat(result.quality_score) * 100).toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-1 lg:gap-y-2 text-xs lg:text-sm">
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
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Validation History</h1>
        <p className="text-sm lg:text-base text-base-content/70">View and manage your email validation history</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search by email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full text-sm lg:text-base"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered flex-1 sm:flex-none text-sm lg:text-base"
          >
            <option value="date">Sort by Date</option>
            <option value="status">Sort by Quality</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="btn btn-square btn-outline btn-sm lg:btn-md"
            title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-outline btn-primary btn-sm lg:btn-md flex-1 sm:flex-none"
            disabled={validationHistory.length === 0}
          >
            Download CSV
          </button>
          <button
            onClick={clearHistory}
            className="btn btn-outline btn-error btn-sm lg:btn-md flex-1 sm:flex-none"
            disabled={validationHistory.length === 0}
          >
            Clear History
          </button>
        </div>
      </div>

      {/* Results */}
      {filteredHistory.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredHistory.map((result) => (
            <ResultCard key={`${result.email}-${result.timestamp}`} result={result} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 lg:py-12">
          <p className="text-base lg:text-lg text-base-content/70">
            {validationHistory.length === 0
              ? 'No validation history available'
              : 'No results match your search'}
          </p>
        </div>
      )}
    </div>
  );
};

export default History;