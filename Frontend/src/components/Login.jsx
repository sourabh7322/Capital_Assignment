import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, VStack, Alert, AlertIcon } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth();
    const { email, password } = formData;
    const navigate = useNavigate(); // Initialize useNavigate

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('https://capital-assignment-3.onrender.com/api/auth/login', formData);
            setLoginSuccess(true);
            setError('');
            login(); // Update the authentication state
            navigate('/'); // Redirect to the home page or Navbar
        } catch (error) {
            setLoginSuccess(false);
            setError(error.response?.data?.message || 'Login failed.');
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
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
                </FormControl>
                <Button colorScheme="teal" onClick={onSubmit}>
                    Login
                </Button>
                {loginSuccess && (
                    <Alert status="success" mt={4}>
                        <AlertIcon />
                        Login successfully
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

export default Login;
