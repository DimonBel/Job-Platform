import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 6, mt: 8 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        <span style={{ color: '#7b61ff', fontWeight: 'bold' }}>AlwaysApply</span>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Call now: <Link href="tel:+919897760878" underline="none" color="secondary">+91 98977 60878</Link>
                    </Typography>
                    <Typography variant="body2">
                        495 Chanchal Chowk Street, Near Roti Doot Chori, New Delhi, Delhi 110006, India
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>Quick Link</Typography>
                    <Link href="#" underline="none" color="inherit"><Typography>About</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Contact</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Admin</Typography></Link>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>Candidate</Typography>
                    <Link href="#" underline="none" color="inherit"><Typography>Browse Jobs</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Browse Employers</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Candidate Dashboard</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Saved Jobs</Typography></Link>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>Employers</Typography>
                    <Link href="#" underline="none" color="inherit"><Typography>Post a Job</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Browse Candidates</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Employers Dashboard</Typography></Link>
                    <Link href="#" underline="none" color="inherit"><Typography>Applications</Typography></Link>
                </Grid>
            </Grid>

            {/* Social Media & Copyright */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    &copy; 2023 AlwaysApply - Job Portal. All Rights Reserved.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="#" sx={{ mx: 1 }}><img src="/facebook-icon.png" alt="Facebook" /></Link>
                    <Link href="#" sx={{ mx: 1 }}><img src="/twitter-icon.png" alt="Twitter" /></Link>
                    <Link href="#" sx={{ mx: 1 }}><img src="/instagram-icon.png" alt="Instagram" /></Link>
                    <Link href="#" sx={{ mx: 1 }}><img src="/youtube-icon.png" alt="YouTube" /></Link>
                </Box>
            </Box>
        </Box>
    );
}
