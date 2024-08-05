import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from '@chakra-ui/react';

function Bikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/bikes');
        setBikes(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBikes();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Bikes</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {bikes.map(bike => (
          <Card key={bike._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
              <Image
                src={bike.productImages[0]}
                alt={bike.productName}
                borderRadius='lg'
              />
              <Stack mt='2' spacing='3'>
                <Heading size='md'>{bike.productName}</Heading>
                <Text>{bike.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${bike.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Bikes;
