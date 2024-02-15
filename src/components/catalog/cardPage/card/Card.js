import React,{useState} from 'react';
import { Modal } from '../../modal/Modal';
import { Button,TopText,Container, ContainerText,Text,Model,Сharacteristic, СharacteristicDiv,BottomText,Heart, StyledImage} from './CardStyled';

export const CardItem =({car})=>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return(
<>
                <Container>
                    <StyledImage src={car.img} alt="" width={274} height={268}/>
                    <Heart >
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
            {isModalOpen && <Modal car={car} onClose={handleCloseModal}/>}
    
</>
);

}