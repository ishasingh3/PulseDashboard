import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchRole } from '../redux/slices/roleSlice';

const Header = () => {
  const dispatch = useDispatch();
  const role = useSelector(state => state.role.currentRole);

  return (
    <div>
      <h2>Current Role: {role}</h2>
      <button onClick={() => dispatch(switchRole(role === 'member' ? 'lead' : 'member'))}>
        Switch Role
      </button>
    </div>
  );
};

export default Header;
