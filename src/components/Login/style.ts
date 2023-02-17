import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.red};
  }
`
export const LoginModalButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  font-family: 'poppins';
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: ${props => props.theme.red};
  }
`
export const LoginIcon = styled.div``

export const LoginText = styled.div`
  font-size: 14px;

  a {
    color: black;
    
  }
`
export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const LoginTab = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${props => props.theme.rgba};
  margin-bottom:1rem;
  
  button {
    background-color: transparent;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.border};
    padding:1rem;
    font-family: "poppins";
  }
`

export const ConfirmPassContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block:1rem;
`

export const ConfirmPassCheckbox = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    width: 1rem;
  }
`

export const ButtonSignIn = styled.button`
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${props => props.theme.red};
  color: var(--white);
  cursor: pointer;
  font-family: "poppins";
`
