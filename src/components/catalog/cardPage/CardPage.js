import React, { useState ,useEffect} from 'react';
import { CardItem } from './card/Card';
import { List, Button,ListDiv} from './CardPageStyled';
import Form from '../form/Form';
import fetchCars from '../../api';


export const CardList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);
  
  const [visibleCars, setVisibleCars] = useState(12);

  const handleLoadMore = () => {
    setVisibleCars(prevCount => prevCount + 12); 
  };

  return (
    <>
      <Form/>
      <ListDiv>
        <List>
          {cars.slice(0, visibleCars).map(car => ( 
            <CardItem
              key={car.id}
              car={car}
            />
          ))}
        </List>
        {visibleCars < cars.length && ( 
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </ListDiv>
   
    </>
  );
};
