import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Input, IconButton, useBreakpointValue, Button, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { query, setQuery } = useSearch();
    const { isAuthenticated, logout } = useAuth();
    const [filter, setFilter] = useState('all'); // New state for filter
    const isMobile = useBreakpointValue({ base: true, md: false });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search query:', query);
        window.location.href = `/search?query=${encodeURIComponent(query)}&filter=${filter}`;
    };

    return (
        <Box bg="teal.500" color="white" py={4}>
            <Flex 
                maxW="1200px" 
                mx="auto" 
                px={3} 
                align="center" 
                justify="space-between" 
                wrap="wrap"
                direction={{ base: 'column', md: 'row' }} 
            >
                <Flex align="center" mb={{ base: 4, md: 0 }}>
                    <Link to="/">
                        <ChakraLink fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none' }} color="white" mr={{ base: 0, md: 8 }}>
                            Becho
                        </ChakraLink>
                    </Link>
                </Flex>

                <Flex 
                    align="center" 
                    flex={{ base: 1, md: 'auto' }} 
                    direction={{ base: 'column', md: 'row' }} 
                    wrap="wrap" 
                    mb={{ base: 4, md: 0 }} 
                >
                    <Flex 
                        as="nav" 
                        spacing={{ base: 4, md: 8 }} 
                        align="center" 
                        mb={{ base: 4, md: 0 }} 
                        direction={{ base: 'column', md: 'row' }}
                        wrap="wrap"
                    >
                        <ChakraLink as={Link} to="/bikes" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Bikes
                        </ChakraLink>
                        <ChakraLink as={Link} to="/cars" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Cars
                        </ChakraLink>
                        <ChakraLink as={Link} to="/houses" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Houses
                        </ChakraLink>
                        <ChakraLink as={Link} to="/laptops" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Laptops
                        </ChakraLink>
                        <ChakraLink as={Link} to="/mobiles" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Mobiles
                        </ChakraLink>
                        <ChakraLink as={Link} to="/items" px={2} py={1} borderRadius="md" _hover={{ bg: 'teal.600' }} mr={{ base: 0, md: 4 }}>
                            Items
                        </ChakraLink>
                    </Flex>

                    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            id="search"
                            type="text"
                            placeholder="Search all categories..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            bg="white"
                            color="gray.800"
                            borderRadius="md"
                            size="md"
                            mr={2}
                        />
                        {isAuthenticated && ( // Conditional rendering of the filter
                            <Select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                bg="white"
                                color="gray.800"
                                borderRadius="md"
                                size="md"
                                mr={2}
                            >
                                <option value="all">All</option>
                                <option value="sold">Sold</option>
                                <option value="unsold">Unsold</option>
                            </Select>
                        )}
                        <IconButton
                            type="submit"
                            icon={<SearchIcon />}
                            aria-label="Search"
                            colorScheme="teal"
                            size="md"
                            borderRadius="md"
                        />
                    </form>
                </Flex>

                <Flex 
                    align="center" 
                    direction={{ base: 'column', md: 'row' }}
                    mt={{ base: 4, md: 0 }}
                    wrap="wrap"
                >
                    {isAuthenticated ? (
                        <Button onClick={logout} colorScheme="teal" px={4} py={2} borderRadius="md">
                            Logout
                        </Button>
                    ) : (
                        <>
                            <ChakraLink as={Link} to="/login" px={4} py={2} borderRadius="md" _hover={{ bg: 'teal.600' }}>
                                Login
                            </ChakraLink>
                            <ChakraLink as={Link} to="/register" px={4} py={2} borderRadius="md" _hover={{ bg: 'teal.600' }}>
                                Sign Up
                            </ChakraLink>
                        </>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;
