import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/slices/membersSlice';

const StatusSelector = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.role);

  return (
    <div>
      {['Working', 'Break', 'Meeting', 'Offline'].map(status => (
        <button
          key={status}
          onClick={() => dispatch(updateStatus({ name: currentUser, status }))}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusSelector;
