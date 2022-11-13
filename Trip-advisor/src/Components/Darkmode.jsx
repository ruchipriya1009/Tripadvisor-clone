import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
const Darkmode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
         <Button bgColor='white' border='1px solid rgb(226, 223, 223) ' onClick={toggleColorMode}>
        {colorMode === 'light' ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun" style={{color:"black"}}></i>}
       </Button>
    </div>
  )
}

export default Darkmode