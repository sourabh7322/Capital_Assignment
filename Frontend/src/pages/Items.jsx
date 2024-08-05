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
} from '@chakra-ui/react';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/items');
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Heading as="h2" mb={4}>Items</Heading>
      <Flex wrap="wrap" justify="center">
        {items.map(item => (
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
    </div>
  );
}

export default Items;
