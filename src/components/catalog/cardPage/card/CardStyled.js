import styled from 'styled-components';
export const Button = styled.button`
background-color:var(--blue);
    color: #fff;
    font-size:14px;
    padding:12px 99px;
    border-radius:12px;
    &:hover {
        background-color: var(--blue-2);
    }
`;
export const TopText =styled.div`
display:flex;
justify-content: space-between;
`;
export const Container =styled.li`
position: relative;
width:274px;
`;
export const ContainerText =styled.div`
display:flex;
flex-direction:column;
margin-top:14px;
margin-bottom:28px;
gap:8px;
`;
export const Text = styled.p`
font-size:16px;
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
`;
export const Heart =styled.button`
width:18px;
height:18px;
background:black;
position: absolute;
margin:14px;
top: 0; 
right: 0;
`;

export const StyledImage=styled.img`
    border-radius: 14px;
`;
