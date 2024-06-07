import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/protected');
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Error fetching protected data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default ProtectedPage;
