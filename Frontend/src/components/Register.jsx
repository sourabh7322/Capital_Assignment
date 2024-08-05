import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, VStack, Alert, AlertIcon, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const toast = useToast();
    const navigate = useNavigate(); // Create an instance of navigate
    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('https://capital-assignment-3.onrender.com/api/auth/register', formData);
            console.log(res);
            setSuccess('Registration successful!');
            setError('');
            toast({
                title: 'Registration successful.',
                description: "You have registered successfully.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            setFormData({ username: '', email: '', password: '' });
            navigate('/login'); // Redirect to the login page after successful registration
        } catch (error) {
            setSuccess('');
            setError(error.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <Box
            p={8}
            maxW="md"
            mx="auto"
            mt={8}
            bg="white"
            borderRadius="md"
            boxShadow="md"
        >
            <VStack spacing={4} align="stretch">
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name="username" value={username} onChange={onChange} placeholder="Username" />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
                </FormControl>
                <Button colorScheme="teal" onClick={onSubmit}>
                    Register
                </Button>
                {success && (
                    <Alert status="success" mt={4}>
                        <AlertIcon />
                        {success}
                    </Alert>
                )}
                {error && (
                    <Alert status="error" mt={4}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
            </VStack>
        </Box>
    );
};

export default Register;
