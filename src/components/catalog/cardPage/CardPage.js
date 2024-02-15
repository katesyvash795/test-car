import React, { useState } from 'react';
import { CardItem } from './card/Card';
import { List, Button,ListDiv} from './CardPageStyled';

export const CardList = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(12); // Определяем начальное количество видимых машин

  const handleLoadMore = () => {
    setVisibleCars(prevCount => prevCount + 12); // При нажатии на кнопку увеличиваем количество видимых машин на 12
  };

  return (
    <ListDiv>
      <List>
        {cars.slice(0, visibleCars).map(car => ( // Отображаем только часть машин в соответствии с текущим количеством видимых машин
          <CardItem
            key={car.id}
            car={car}
          />
        ))}
      </List>
      {visibleCars < cars.length && ( // Если еще есть машины для отображения, показываем кнопку "Load more"
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </ListDiv>
  );
};
