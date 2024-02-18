import React, { useState } from 'react';
import { Modal } from '../../modal/Modal';
import { Button, TopText, Container, ContainerText, Text, Model, Сharacteristic, СharacteristicDiv, BottomText, Heart, StyledImage } from './CardStyled';

export const CardItem = ({ car,updateFavorites}) => { // 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const initialFavouriteState = JSON.parse(localStorage.getItem('favorites') || '[]').some(favorite => favorite.id === car.id);
    const [isFavourite, setIsFavourite] = useState(initialFavouriteState);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFavourite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const existingIndex = favorites.findIndex(favorite => favorite.id === car.id);
        if (existingIndex !== -1) {
          favorites.splice(existingIndex, 1);
          setIsFavourite(false); 
        } else {
          favorites.push(car);
          setIsFavourite(true); 
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavorites();
      };

    return (
        <>
            <Container>
                <StyledImage src={car.img} alt="" width={274} height={268} />
                <Heart onClick={handleFavourite} style={{ backgroundColor: isFavourite ? 'purple' : 'white' }}>
                    </Heart> 
                <ContainerText>
                    <TopText>
                        <Text>{car.make} <Model>{car.model}</Model>,<span>{car.year}</span></Text>
                        <Text>{car.rentalPrice}</Text>
                    </TopText>
                    <BottomText>
                        <СharacteristicDiv>
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic> Premium  </Сharacteristic>
                        </СharacteristicDiv>
                        <СharacteristicDiv>
                            <Сharacteristic> Ukraine  </Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic>{car.id}</Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
                        </СharacteristicDiv>
                    </BottomText>
                </ContainerText>
                <Button onClick={handleOpenModal}>Learn more</Button>
            </Container>
            {isModalOpen && <Modal car={car} onClose={handleCloseModal} />}
        </>
    );
};
