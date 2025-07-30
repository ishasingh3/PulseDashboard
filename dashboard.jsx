import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import StatusSelector from '../components/StatusSelector';

const Dashboard = () => {
  const role = useSelector(state => state.role.currentRole);

  return (
    <div>
      <Header />
      {role === 'lead' ? (
        <>
          <h3>Team Lead View</h3>
          <TaskForm />
        </>
      ) : (
        <>
          <h3>Team Member View</h3>
          <StatusSelector />
          <TaskList />
        </>
      )}
    </div>
  );
};

export default Dashboard;
