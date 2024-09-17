import React, { useState, useEffect } from 'react';

function DataTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Hard-coded data
    const data = [
      {
        id: 1,
        date: '2024-02-01',
        amount: 100,
        type: 'Loan',
        category: 'Cash Advance',
      },
      {
        id: 2,
        date: '2024-02-02',
        amount: 200,
        type: 'Insurance',
        category: 'Health Cover',
      },
      {
        id: 3,
        date: '2024-02-03',
        amount: 300,
        type: 'Market Linkage',
        category: 'Crop Sale',
      },
    ];
    setTransactions(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-white  rounded shadow-md mt-10'>
      <h2
        className='text-lg font-bold text-white bg-gray-800'
      >
        Recent Transactions
      </h2>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='border px-4 py-2 text-left text-white'>ID</th>
            <th className='border px-4 py-2 text-left text-white'>Date</th>
            <th className='border px-4 py-2 text-left text-white'>Amount</th>
            <th className='border px-4 py-2 text-left text-white'>Type</th>
            <th className='border px-4 py-2 text-left text-white'>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className='border px-4 py-2'>{transaction.id}</td>
              <td className='border px-4 py-2 bg-gray-100'>{transaction.date}</td>
              <td className='border px-4 py-2'>{`$${transaction.amount.toLocaleString()}`}</td>
              <td className='border px-4 py-2 bg-gray-100'>{transaction.type}</td>
              <td className='border px-4 py-2'>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
