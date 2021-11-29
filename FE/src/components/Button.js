import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background:transparent;
    border:0.1rem solid salmon;
    color: var(--mainWhite);
    border-radius: 0.5rem;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
   &:hover{
       background: var(--mainDark);
   }
   &:focus{
       outline:none;
   }
`;