import React, { useState, useEffect } from 'react';
import { CardItem } from './card/Card';
import { List, Button, ListDiv } from './CardPageStyled';
import {Form} from '../form/Form';
import fetchCars from '../../api';

export const CardList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(12);
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
        setFilteredCars(carsData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  const onSearch = (filters) => {
    let filtered = cars;

    if (filters.brand) {
      filtered = filtered.filter(car => car.make === filters.brand);
    }
    if (filters.rentalPrice) {
      const price = filters.price ? parseFloat(filters.price.replace('$', '')) : 0;
      filtered = filtered.filter(car => car.rentalPrice <= price);
    }
    if (filters.mileage.from) {
      const from = filters.mileage.from ? parseFloat(filters.mileage.from) : 0;
      filtered = filtered.filter(car => car.mileage >= from);
    }
    if (filters.mileage.to) {
      const to = filters.mileage.to ? parseFloat(filters.mileage.to) : Infinity;
      filtered = filtered.filter(car => car.mileage <= to);
    }
    
    setFilteredCars(filtered);
  };

  const handleLoadMore = () => {
    setVisibleCars(prevCount => prevCount + 12);
  };

  return (
    <>
      <Form onSearch={onSearch} />
      <ListDiv>
        <List>
          {filteredCars.slice(0, visibleCars).map(car => (
            <CardItem
              key={car.id}
              car={car}
              updateFavorites={updateFavorites}
              isFavourite={favorites.some(favorite => favorite.id === car.id)} // Передаем isFavourite как пропс
/>
          ))}
        </List>
        {visibleCars < filteredCars.length && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </ListDiv>
    </>
  );
};
