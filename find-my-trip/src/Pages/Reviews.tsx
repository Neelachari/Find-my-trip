import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import Card from "./BookingCard/ReviewCard"

import DownloadApp from '../Components/DownloadApp';

const Reviews = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tzKQb7r6fcGifvp1xzZ8WH1uqW2kZjEOJ4KXcB2XuU494Ix_nb1UbqJX7kNy3KX5obM&usqp=CAU' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="50%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Reviews</Text>
      </Box>
      <Box width="90%" margin="auto">
        <Card/>
      </Box>
      <Box width="90%" margin="auto" >
       <DownloadApp/>
      </Box>
    </Box>
  )
}

export default Reviews