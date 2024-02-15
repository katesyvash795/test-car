import React, { useState, useEffect } from 'react';
import fetchCars from '../api';
import { CardList } from '../components/catalog/cardPage/CardPage';

const Catalog= () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const carsData = await fetchCars();
      setCars(carsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardList cars={cars} />
    </div>
  );

};

export default Catalog;
