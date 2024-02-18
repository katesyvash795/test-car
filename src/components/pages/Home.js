import car from './img/car1.jpg';
import React from 'react';
import {HomeText,Container,TextContainer} from './HomeStyled'
export const Home = () => {
    return (
<div>
            <Container>
<TextContainer>
                    <HomeText>
                        We offer a wide selection of quality and reliable cars at affordable prices. Our company specializes in the sale of new and used cars of various makes and models to meet the needs of each customer.
                    </HomeText> 
</TextContainer>
                <img src={car} alt="" width={600} height={500} />
                 </Container>
               
</div>
       
    );
}
