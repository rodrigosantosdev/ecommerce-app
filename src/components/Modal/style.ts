import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  right: 50%;
  top: 170px;
 
  transform: translateX(-50%);
  padding: 1rem;
  min-width: 500px;
  z-index: 1000;
  border-radius: 8px;
  border:1px solid var(--rgba);
  background-color: var(--white);
`
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
`

export const ModalHeaderButtonClose = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--red);
  color: var(--white);

  span {
    padding: 0.3rem;
  }
`

export const ModalFooter = styled.div`
  text-align: center;
`
