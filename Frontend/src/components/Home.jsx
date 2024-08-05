import React, { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Card, CardBody, Image, Stack, Text, CardFooter, Button, Divider, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { useSearch } from '../context/SearchContext'; // Adjust path if necessary

function Home() {
  const { query, results, setResults } = useSearch();
  const [allData, setAllData] = useState({ bikes: [], cars: [], houses: [], laptops: [], mobiles: [], items: [] });

  useEffect(() => {
    // Fetch all categories' data when the component mounts
    const fetchAllData = async () => {
      try {
        const response = await fetch('https://capital-assignment-3.onrender.com/api/all');

        // Check if response is OK and content type is JSON
        if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
          const data = await response.json();
          setAllData(data);
        } else {
          // Handle unexpected content type
          console.error('Unexpected response format:', response.statusText);
        }
      } catch (err) {
        console.error('Error fetching all data:', err);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        try {
          const response = await fetch(`https://capital-assignment-3.onrender.com/api/search?search=${query}`);

          // Check if response is OK and content type is JSON
          if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
            const data = await response.json();
            setResults(data);
          } else {
            // Handle unexpected content type
            console.error('Unexpected response format:', response.statusText);
          }
        } catch (err) {
          console.error('Error fetching search results:', err);
        }
      };
      fetchResults();
    }
  }, [query, setResults]);

  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={6} color="teal.600">
        Welcome to the Home Page
      </Heading>

      {/* Category Tabs */}
      <Tabs variant='soft-rounded' colorScheme='green' isFitted>
        <TabList mb={4} spacing={4}>
          <Tab>Bikes</Tab>
          <Tab>Cars</Tab>
          <Tab>Houses</Tab>
          <Tab>Laptops</Tab>
          <Tab>Mobiles</Tab>
          <Tab>Items</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Display Bikes Data */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
              {allData.bikes.map(bike => (
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
          </TabPanel>
          <TabPanel>
            {/* Display Cars Data */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
              {allData.cars.map(car => (
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
          </TabPanel>
          <TabPanel>
            {/* Display Houses Data */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
              {allData.houses.map(house => (
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
          </TabPanel>
          <TabPanel>
            {/* Display Laptops Data */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
              {allData.laptops.map(laptop => (
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
          </TabPanel>
          <TabPanel>
            {/* Display Mobiles Data */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
              {allData.mobiles.map(mobile => (
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Home;
