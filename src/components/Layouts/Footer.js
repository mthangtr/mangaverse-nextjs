import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            MangaVerse
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Your one-stop manga destination. Dive into the world of manga with us and explore stories from around the globe.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Resources
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                            Blog
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                            Contact Us
                        </Link>
                        <Link href="#" color="inherit">
                            Privacy Policy
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="#" color="inherit">
                            <TwitterIcon sx={{ marginRight: 1 }} />
                        </Link>
                        <Link href="#" color="inherit">
                            <FacebookIcon sx={{ marginRight: 1 }} />
                        </Link>
                        <Link href="#" color="inherit">
                            <InstagramIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
