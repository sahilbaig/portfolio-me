import React from 'react';
import Layout from '../components/Layout';
import { Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One. It is a web application built using React and Node.js.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two. It is a mobile application built using React Native.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Project Three',
    description: 'This is a description of Project Three. It is a machine learning project using Python and TensorFlow.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
        id="home"
      >
        <Typography variant="h2">Hi there 👋</Typography>
        <Typography variant="h1" sx={{ marginTop: '20px', fontWeight: 'bold' }}>
          Mirza Sahil Baig
        </Typography>
        <Typography variant="h5" sx={{ marginTop: '20px', maxWidth: '600px' }}>
          I am a passionate developer with a knack for building innovative projects.
        </Typography>
        <Link href="#projects" passHref>
          <Button variant="contained" sx={{ marginTop: '40px' }}>
            View My Projects
          </Button>
        </Link>
      </Box>

      <Box id="projects" sx={{ padding: '80px 0' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
          }}
        >
          {projects.map((project, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box id="contact" sx={{ padding: '80px 0' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <form>
            <Box mb={3}>
              <Typography variant="body1">Name</Typography>
              <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
            </Box>
            <Box mb={3}>
              <Typography variant="body1">Email</Typography>
              <input type="email" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
            </Box>
            <Box mb={3}>
              <Typography variant="body1">Message</Typography>
              <textarea style={{ width: '100%', padding: '10px', fontSize: '16px' }} ></textarea>
            </Box>
            <Button variant="contained" type="submit">Send</Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
