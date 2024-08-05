import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from '@chakra-ui/react';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/cars');
        setCars(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCars();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Cars</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {cars.map(car => (
          <Card key={car._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
              <Image
                src={car.productImages[0]}
                alt={car.productName}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{car.productName}</Heading>
                <Text>{car.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${car.price}
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

export default Cars;
