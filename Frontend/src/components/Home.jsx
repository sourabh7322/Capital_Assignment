import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
  Select,
} from '@chakra-ui/react';

function Items() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/items', {
          params: { filter } // Pass filter parameter to API
        });
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  }, [filter]); // Dependency array includes filter

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box p={4} textAlign="center">
      <Heading as="h1" size="3xl" mb={6} color="teal.600">
        Welcome to the BECHO Page
      </Heading>
      <Flex justify="center" mb={4}>
        <Select
          value={filter}
          onChange={handleFilterChange}
          width="200px"
          placeholder="Filter by status"
        >
          <option value="all">All</option>
          <option value="sold">Sold</option>
          <option value="unsold">Unsold</option>
        </Select>
      </Flex>
      <Flex wrap="wrap" justify="center">
        {items.map((item) => (
          <Card key={item._id} maxW="xs" m="2" border="1px" borderColor="black">
            <CardBody>
              <Image
                src={item.productImages[0]}
                alt={item.name}
                borderRadius="lg"
              />
              <Stack mt="4" spacing="2">
                <Heading size="sm">{item.name}</Heading>
                <Text fontSize="sm">{item.description}</Text>
                <Text color="blue.600" fontSize="xl">
                  ${item.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue" size="sm">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue" size="sm">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}

export default Items;
