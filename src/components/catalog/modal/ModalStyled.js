import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 20, 23, 0.5); /* 50% від #121417 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:11
`;

export const ModalContent = styled.div`
    width: 541px;
    height: auto;
    display:flex;
    flex-direction:column;
    gap:24px;
    position:relative;
    background-color: #ffffff; /* Колір фону модального вікна */
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index:12;
`;

export const CloseButton = styled.button`
position:absolute;    
top: 16px;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
`;

export const ContainerText =styled.div`
display:flex;
flex-direction:column;
`;

export const TopText =styled.div`
display:flex;
margin-bottom:8px;
justify-content: space-between;
`;
export const Text = styled.p`
font-size:18px;
color:var(--black);
font-weight: 500;
`;
export const Model=styled.span`
color:var(--blue);
`;
export const Сharacteristic =styled.p`
font-size:12px;
color:var(--black);
font-weight: 400;
opacity: 0.5; 
`;
export const СharacteristicDiv =styled.div`
display:flex;
> *:not(:last-child)::after {
    content: '|';
    margin-left: 6px;
    margin-right: 6px;
    opacity: 0.5; 
    color:var(--black);
}
`;

export const BottomText=styled.div`
display:flex;
flex-direction:column;
gap:4px;
margin-bottom:14px;
`;

export const Rental =styled.a`
background-color:var(--blue);
    color: #fff;
    width:168px;
    font-size:14px;
    padding:14px 50px;
    border-radius:12px;
    &:hover {
        background-color: var(--blue-2);
    }
`;
export const Description =styled.p `
font-size:14px;
color:var(--black);
font-weight: 400;
`;
export const Title = styled.p`
font-size:14px;
margin-bottom:8px;
color:var(--black);
font-weight: 500;
`
export const RentalText =styled.div`
display:flex;
flex-direction:column;
gap:8px;
`;
export const RentalDiv =styled.div`
display:flex;
gap:8px;
`;
export const Span = styled.span`
color:var(--blue);
`;
export const RentalDivText = styled.p`
font-size:12px;
padding:7px 14px;
background:#F9F9F9;
border-radius:35px;
color:var(--black);
font-weight: 400;
`;
export const Img =styled.img`
border-radius:14px;
`;