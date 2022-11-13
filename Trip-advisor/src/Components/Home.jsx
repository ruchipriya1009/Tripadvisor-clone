
import React from 'react'
import '../Styles/Home.css'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Input,
  } from '@chakra-ui/react'

  import { Search2Icon } from '@chakra-ui/icons'

const Home = () => {

    const OverlayOne = () => (
        <ModalOverlay
          bg='white.100'
          backdropFilter='blur(10px) '
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <div>
        <div className='Home_bg_img'>
           <div className='img_input'>
           <i class="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder='Where to..?'
           onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }} />
           </div>
        </div>

      <Modal  isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap='10px' alignItems='center' borderBottom='3px solid' p='10px'>
             <Search2Icon/>
             <Input placeholder='Where to..?' borderBottom='0px'
              borderTop='0px' borderRight='0px'
               borderLeft='0px' borderRadius='0px' 
               focusBorderColor='white'/>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Home