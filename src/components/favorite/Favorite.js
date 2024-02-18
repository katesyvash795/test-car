import React from 'react';

export const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <div>
        {favorites.map(fav => (
          <div key={fav.id}>
            <p>{fav.id}</p>
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
