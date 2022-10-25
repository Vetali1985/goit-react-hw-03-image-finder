import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border: black solid 2px;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.4, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.4, 1);

  :hover {
    
    background-color: aqua;
  }
`;