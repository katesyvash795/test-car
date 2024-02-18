import styled from 'styled-components';
export const Input = styled.div`
display:flex;
flex-direction:column;
gap:8px;
`;
export const InputDiv = styled.div`
display:flex;

`;
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top:100px;
gap:18px;

label{
    font-size: 14px;
    font-weight: 500;
    color:rgba(138, 138, 137, 1);
    display: flex;
    gap: 8px;
    flex-direction: column;
}
select{
    padding: 14px 18px;
    font-size: 16px;
    font-weight:500;
    background:rgba(247, 247, 251, 1);
    border-radius: 14px;
    color:var(--black);

}
option{
color:rgba(18, 20, 23, 0.2);
}
  input {
    padding: 14px 18px;
    font-size: 16px;
    font-weight:500;
    border-right:1px solid rgba(138, 138, 137, 0.2);
    background:rgba(247, 247, 251, 1);
    color:var(--black);
  }
  button {
    background-color:var(--blue);
    color:var(--white);
    border: none;
    margin-top:auto;
    border-radius: 12px;
    padding: 14px 44px;
    font-size: 16px;
    font-weight:600;
    cursor: pointer;
   height:48px;
    &:hover {
      background-color:var(--blue-2);
    }
  }
`;
export const From=styled.input`
border-radius: 14px 0px 0px 14px;
`;
export const To=styled.input`
border-radius: 0 14px 14px 0;
`;