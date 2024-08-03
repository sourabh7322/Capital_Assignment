import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const ProtectedPage = ({ logout }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user/purchases');
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      <button onClick={logout}>Logout</button>
      <div>
        <h3>Your Purchases:</h3>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProtectedPage;
