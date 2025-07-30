import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignTask } from '../redux/slices/membersSlice';

const TaskForm = () => {
  const members = useSelector(state => state.members);
  const dispatch = useDispatch();
  const [memberName, setMemberName] = useState('');
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');

  const submit = () => {
    dispatch(assignTask({ name: memberName, task: { title, due, progress: 0 } }));
    setTitle('');
    setDue('');
  };

  return (
    <div>
      <select onChange={e => setMemberName(e.target.value)}>
        <option value="">Select Member</option>
        {members.map(m => <option key={m.name}>{m.name}</option>)}
      </select>
      <input placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="date" value={due} onChange={e => setDue(e.target.value)} />
      <button onClick={submit}>Assign Task</button>
    </div>
  );
};

export default TaskForm;
