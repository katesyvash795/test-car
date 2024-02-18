import styled from 'styled-components';
export const HomeText = styled.p`
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
`;

export const CatalogButton = styled.button`
    background-color:var(--blue);
    color: var(--white);
    padding: 20px 60px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--blue-2);
    }
`;

export const Container =styled.div`
display:flex;
gap:60px;
padding:200px 100px 0 100px;
`;
export const TextContainer=styled.div`
padding:60px;
display:flex;
flex-direction:column;
gap:100px;
`;