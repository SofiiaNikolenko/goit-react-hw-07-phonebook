import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" id="findContacts" onChange={handleFilterChange} />
    </>
  );
}

export default Filter;
