import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = 1; // Здесь установите текущий ID пользователя
        const response = await axios.get(`http://localhost:5000/tasks/${userId}`);
        setTasks(response.data);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {message && <p>{message}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
