import React, {  useEffect } from 'react';
import x from './x.svg';
import * as Styles from './ModalStyled';

export const Modal = ({ onClose,car}) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });
    
    return (
        <>
        <Styles.ModalBackdrop onClick={onClose}>
            <Styles.ModalContent>
                <Styles.CloseButton onClick={onClose}>
                    <img src={x} width={24} height={24} alt='' />
                </Styles.CloseButton>
                    <Styles.Img src={car.img} width={461} height={348} alt='' />
                    <div>
                        <Styles.ContainerText>
                            <Styles.TopText>
                                <Styles.Text>Buick <Styles.Model>Enclave</Styles.Model>,<span>2008</span></Styles.Text>
                            </Styles.TopText>
                            <Styles.BottomText>
                                <Styles.СharacteristicDiv>
                                    <Styles.Сharacteristic>Kiev </Styles.Сharacteristic>
                                    <Styles.Сharacteristic> Ukraine </Styles.Сharacteristic>
                                    <Styles.Сharacteristic>Luxury Car Rentals</Styles.Сharacteristic>
                                    <Styles.Сharacteristic> Premium  </Styles.Сharacteristic>
                                </Styles.СharacteristicDiv>
                                <Styles.СharacteristicDiv>
                                    <Styles.Сharacteristic>Kiev </Styles.Сharacteristic>
                                    <Styles.Сharacteristic> Ukraine </Styles.Сharacteristic>
                                    <Styles.Сharacteristic>Luxury</Styles.Сharacteristic>
                                    <Styles.Сharacteristic> Premium  </Styles.Сharacteristic>
                                </Styles.СharacteristicDiv>
                            </Styles.BottomText>
                            <Styles.Description>
                                The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.
                            </Styles.Description>
                        </Styles.ContainerText>
                    </div>
                    <div>
                        <Styles.Title>Accessories and functionalities:</Styles.Title>
                        <Styles.BottomText>
                            <Styles.СharacteristicDiv>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                            </Styles.СharacteristicDiv>
                            <Styles.СharacteristicDiv>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                                <Styles.Сharacteristic>Leather seats</Styles.Сharacteristic>
                            </Styles.СharacteristicDiv>
                        </Styles.BottomText>
                    </div>
                    <div>
                        <Styles.Title>Rental Conditions: </Styles.Title>
                        <Styles.RentalText>
                            <Styles.RentalDiv>
                                <Styles.RentalDivText>Minimum age:<Styles.Span>25</Styles.Span> </Styles.RentalDivText>
                                <Styles.RentalDivText>Valid driver’s license</Styles.RentalDivText>
                            </Styles.RentalDiv>
                            <Styles.RentalDiv>
                                <Styles.RentalDivText>Security deposite required </Styles.RentalDivText>
                                <Styles.RentalDivText>Mileage: <Styles.Span>5,858</Styles.Span></Styles.RentalDivText>
                                <Styles.RentalDivText>Price: <Styles.Span>40$</Styles.Span></Styles.RentalDivText>
                            </Styles.RentalDiv>
                        </Styles.RentalText>
                    </div>
                
                <Styles.Rental href="tel:+380730000000">Rental car</Styles.Rental>
            </Styles.ModalContent>
        </Styles.ModalBackdrop>
        </>
    );
}

export default Modal;
