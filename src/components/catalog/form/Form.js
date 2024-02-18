import React, { useState } from 'react';
import { Input, StyledForm, InputDiv, From, To } from './FormStyled';

import brandsData from './makes.json';

export const Form = ({ onSearch }) => {
  const [brand, setBrand] = useState('');
  const [rentalPrice, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const filters = {
      brand,
      rentalPrice,
      mileage: { from: mileageFrom, to: mileageTo }
    };
    onSearch(filters);
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <label>Car brand
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Enter the text</option>
          {brandsData.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </label>

      <label>Price/1 hour
        <select value={rentalPrice} onChange={(e) => setPrice(e.target.value)}>
          <option value="">To $</option>
          <option value="$20">$20</option>
          <option value="$30">$30</option>
          <option value="$45">$45</option>
        </select>
      </label>

      <Input>
        <label>Car mileage/km</label>
        <InputDiv>
          <From
            type="text"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <To
            type="text"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </InputDiv>
      </Input>

      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default Form;
