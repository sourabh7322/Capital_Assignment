import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from '@chakra-ui/react';

function Laptops() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/laptops');
        setLaptops(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLaptops();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Laptops</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4}} spacing={4}>
        {laptops.map(laptop => (
          <Card key={laptop._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
              <Image
                src={laptop.productImages[0]}
                alt={laptop.productName}
                borderRadius='lg'
                boxSize='200px'
                objectFit='cover'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{laptop.productName}</Heading>
                <Text>{laptop.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${laptop.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy Now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to Cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Laptops;
