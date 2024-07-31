import React from 'react';
import './Chart.css';
import CircularChart from './Circularchart';

const Chart = () => {
  return (
    <div className="chart">
      {/* Placeholder for Chart */}
      <div className="chart-placeholder">
        <CircularChart/>
      </div>
      <div className="history">History</div>
    </div>
  );
}

export default Chart;
