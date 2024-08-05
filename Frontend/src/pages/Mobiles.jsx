import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from '@chakra-ui/react';

function Mobiles() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/mobiles');
        setMobiles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMobiles();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Mobiles</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {mobiles.map(mobile => (
          <Card key={mobile._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
              <Image
                src={mobile.productImages[0]}
                alt={mobile.productName}
                borderRadius='lg'
                boxSize='200px'
                objectFit='cover'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{mobile.productName}</Heading>
                <Text>{mobile.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${mobile.price}
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

export default Mobiles;
