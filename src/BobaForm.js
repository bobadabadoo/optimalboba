import React, { useState } from 'react';

const BobaForm = ({ handleFormSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBobaPlace = { name, location, rating, type };
    handleFormSubmit(newBobaPlace);
    setName('');
    setLocation('');
    setRating(0);
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new boba place</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default BobaForm;
