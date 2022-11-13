
import React, { useContext } from 'react'
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
    Button,
    ModalHeader,
    ModalFooter,
  } from '@chakra-ui/react'

  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'
import { AuthContext } from '../Context/AppContext'
import { Slide } from '../Components/Slide'
import SlideImage from '../Components/SlideImage'

const Home = () => {

  const {text, alert, handleChange, handleEnter} = useContext(AuthContext);
    const OverlayOne = () => (
        <ModalOverlay
          bg='white.100'
          backdropFilter='blur(10px) '
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <div > 
      <div style={{ width: "100%", height: "100px" }}> </div>
 
       <div className='Route_to_Product'>

          <Button w='20%' bg='red.400' onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Hotels</Button>
          <Button w='20%' bg='yellow.400' onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Holiday Rooms</Button>
          <Button w='20%' bg='green.400' onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Travels Forum</Button>
          <Button w='20%' bg='blue.400' onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Thing To Do</Button>
       </div>
        <div className='Home_bg_img'>
           <div className='img_input'>
           <i style={{color:"black"}} class="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder='Where to..?'
           onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }} />
           </div>
        </div>
        <div onKeyPress={handleEnter}>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
       
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap='10px' alignItems='center' borderBottom='3px solid' p='10px'>
             <Search2Icon/>
             <Input placeholder='Where to..?' borderBottom='0px'
              borderTop='0px' borderRight='0px'
               borderLeft='0px' borderRadius='0px' 
               focusBorderColor='white'
               value={text}
               onChange={handleChange}/>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {alert &&   <Alert status='error'>
            <AlertIcon />
               Add your location where you wanna go!
             </Alert>}
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      <Slide onClick={() => {
        setOverlay(<OverlayOne />)
        onOpen()
      }}/>
      <div className='Home_banner'>
            <div className='Home_banner_left'>
               <h1>Get out there</h1>
               <p>Best of the best tours attractions</p>
               <Button bg='green.400'
               onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}>See the list</Button>
            </div>
             <div className='Home_banner_right' onClick={() => {
                                    setOverlay(<OverlayOne />)
                                  onOpen()
                                 }}>
                    <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1' alt=''/>
             </div>
      </div>
      <SlideImage onClick={() => {
        setOverlay(<OverlayOne />)
        onOpen()
      }} />
    </div>
  )
}

export default Home