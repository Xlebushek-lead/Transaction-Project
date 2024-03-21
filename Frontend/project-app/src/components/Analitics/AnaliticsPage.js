import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analitics.css';

const BalanceChart = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Transaction History</h2>
      <ul style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AnaliticsPage = () => {
  const [balanceData, setBalanceData] = useState([
    { month: 'January', balance: 1000 },
    { month: 'February', balance: 1500 },
    { month: 'March', balance: 1200 },
  ]);

  const [transactions, setTransactions] = useState([
    { date: '2024-01-01', description: 'Purchase', amount: -50 },
    { date: '2024-01-05', description: 'Salary', amount: 100 },
    { date: '2024-01-10', description: 'Utilities', amount: -80 },
  ]);

  const handleShowAllTransactions = () => {
    // Implement functionality to show all transactions
  };

  return (
    <div className="analytics-container">
      <h4 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Current Balance</h4>
      <div className="balance-chart-container">
        <BalanceChart data={balanceData} />
      </div>
      <TransactionHistory transactions={transactions} />
      <div className="show-all-transactions">
        <button onClick={handleShowAllTransactions} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Show All Transactions</button>
      </div>
    </div>
  );
};

export default AnaliticsPage;
