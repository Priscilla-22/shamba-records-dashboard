import React, { useState, useEffect } from 'react';

function DataTable() {
  const [transactions, setTransactions] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  // useEffect(() => {
  //   fetch('http://localhost:4000/transactions')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setTransactions(data);  
  //       setLoading(false);  
  //     })
  //     .catch(error => {
  //       setError(error);  
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    // Hard-coded data
    const data = [
      { "id": 1, "date": "2024-02-01", "amount": 100 },
      { "id": 2, "date": "2024-02-02", "amount": 200 },
      { "id": 3, "date": "2024-02-03", "amount": 300 }
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
    <div className='bg-white p-4 rounded shadow-md'>
      <h2 className='text-lg font-bold'>Recent Transactions</h2>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>ID</th>
            <th className='px-4 py-2'>Date</th>
            <th className='px-4 py-2'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className='px-4 py-2'>{transaction.id}</td>
              <td className='px-4 py-2'>{transaction.date}</td>
              <td className='px-4 py-2'>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
