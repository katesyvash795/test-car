import React, { useState, useEffect } from 'react';
import { CardItem } from '../catalog/cardPage/card/Card';
import { List, ListDiv } from '../catalog/cardPage/CardPageStyled';

export const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    updateFavorites();

    const handleStorageChange = (event) => {
      if (event.key === 'favorites') {
        updateFavorites();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <ListDiv>
      <List>
        {favorites.map(car => (
          <CardItem
            key={car.id}
            car={car}
            updateFavorites={updateFavorites}
          />
        ))}
      </List>
    </ListDiv>
  );
};
