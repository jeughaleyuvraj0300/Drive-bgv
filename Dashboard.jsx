import React from 'react';
import './Dashboard.css';
import Chart from '../Chart/Chart';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="verification-cards">
        <div className="card">70 Document Verification</div>
        <div className="card">30 Address Verification</div>
        <div className="card">15 Education Verification</div>
        <div className="card">5 Reference Verification</div>
        <div className="card">25 Credit Verification</div>
        <div className="card">45 Bank Verification</div>
      </div>
      <div className="charts">
        <Chart />
        <div className="activity">
            <div className='activity-header'>
            Recent Candidate Activity
            </div>
            <div className='activity-content'>
                <ul>
                    <li>Yuvraj Jeughale</li>
                    <li>Yuvraj Jeughale</li>
                    <li>Yuvraj Jeughale</li>
                    <li>Yuvraj Jeughale</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
