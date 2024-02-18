import React from 'react';
import { CardItem } from '../catalog/cardPage/card/Card'; 

export const FavoritesPage = ({ favoriteCars }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <div>
                {favoriteCars.map(car => (
                    <CardItem key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};
