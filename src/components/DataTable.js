import React, { useState, useEffect } from 'react';

function DataTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/db.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransactions(data.transactions); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-white rounded-lg shadow-md mt-6'>
      <h2 className='text-lg font-bold text-white bg-gray-800 text-center rounded'>
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
              <td className='border px-4 py-2 bg-gray-100'>
                {transaction.date}
              </td>
              <td className='border px-4 py-2'>{`$${transaction.amount.toLocaleString()}`}</td>
              <td className='border px-4 py-2 bg-gray-100'>
                {transaction.type}
              </td>
              <td className='border px-4 py-2'>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
