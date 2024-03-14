"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextField, Button, Container, Typography, Box, Stack } from '@mui/material';
import { Heading } from '../Common/heading';
import Navigation from '../Common/Navigation';

// Define a type for the form state to ensure type safety
interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });

  // Update the event type for better type checking
  const handleChange = (prop: keyof ContactFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [prop]: event.target.value });
  };

  const  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Logic to send form data goes here
    console.log(contactForm);
    alert('Form submitted. Check the console for details.');

    const rawResponse = await fetch('/api/mailer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactForm)
    });
    const content = await rawResponse.json();
  };

  return (
    <Stack alignItems="center" >
      <Navigation name="Contact Us" fontColor='white' bgColorClass='blueBG'/>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" className='rubik' >
          Have something to say?
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={contactForm.name}
            onChange={handleChange('name')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={contactForm.email}
            onChange={handleChange('email')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            type="text"
            id="message"
            multiline
            rows={4}
            value={contactForm.message}
            onChange={handleChange('message')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,borderRadius:"100px"}}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
    </Stack>
  );
};

export default ContactUs;
