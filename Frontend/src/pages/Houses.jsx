import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from '@chakra-ui/react';

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/houses');
        setHouses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHouses();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Houses</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {houses.map(house => (
          <Card key={house._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
              <Image
                src={house.image[0]}
                alt="House"
                borderRadius='lg'
                boxSize='200px'
                objectFit='cover'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{house.sellerName}</Heading>
                <Text>{house.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${house.price}
                </Text>
                <Text>Address: {house.address}</Text>
                <Text>Post Date: {house.postDate}</Text>
                <Text>Member Since: {house.memberSince}</Text>
                <Text>Phone: {house.phone}</Text>
                <Text>State: {house.state}</Text>
                <Text>Bathrooms: {house.bathrooms}</Text>
                <Text>Bedrooms: {house.bedrooms}</Text>
                <Text>Furnished: {house.furnished}</Text>
                <Text>Category: {house.category}</Text>
                <Text>Floor: {house.floor}</Text>
                <Text>Car Parking: {house.carParking}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  View Details
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Contact Seller
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Houses;
