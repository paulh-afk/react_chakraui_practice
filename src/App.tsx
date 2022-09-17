import * as React from 'react';
import { Box, Center, HStack, Circle } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export const App = () => {
  return (
    <>
      <Box bg={'tomato'} p={4} color={'white'}>
        This is a Box
      </Box>
      <Center bg="blueviolet" h="100px" color="white">
        This is the Center
      </Center>
      <HStack>
        <Circle bg={'green.500'} p={4}>
          <PhoneIcon color={'white'} />
        </Circle>
      </HStack>
    </>
  );
};
