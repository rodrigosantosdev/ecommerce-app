import { 
    ModalContainer, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalHeaderButtonClose 
} from "./style"

interface ModalProps {
  isOpen?: boolean,
  children?: React.ReactNode,
  setIsOpen: () => void,
}

export default function Modal({ isOpen, children, setIsOpen }:ModalProps ) {

  if(isOpen) {
    return (
        <ModalContainer>
        <ModalHeader>
          <ModalHeaderButtonClose onClick={setIsOpen}>
            <span>x</span>
          </ModalHeaderButtonClose>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalFooter>
        </ModalFooter>
      </ModalContainer>
    )
  } 
  else {
    return null
  }
}
