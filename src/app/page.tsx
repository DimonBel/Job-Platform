// pages/index.js
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardActions, TextField, Box } from '@mui/material';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AlwaysApply
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Find Jobs</Button>
          <Button color="inherit">Employers</Button>
          <Button color="inherit">About Us</Button>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>Contact Us</Button>
          <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 10, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" gutterBottom>
          Find a job that aligns with your interests and skills
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Thousands of jobs in all the leading sectors are waiting for you.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <TextField label="Job title, Keyword..." variant="outlined" sx={{ mr: 2 }} />
          <TextField label="Location" variant="outlined" sx={{ mr: 2 }} />
          <Button variant="contained" color="primary">Find Job</Button>
        </Box>
      </Box>

      {/* Featured Jobs Section */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Featured Jobs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Technical Support Specialist</Typography>
                <Typography color="textSecondary">Google Inc. • New Delhi, India</Typography>
                <Typography color="primary" sx={{ py: 2 }}>Part-time • Salary: ₹20,000 - ₹25,000 INR</Typography>
                <Typography color="textSecondary">10+ applicants</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">View details</Button>
                <Button variant="contained" color="primary">Apply now</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Senior UI/UX Designer</Typography>
                <Typography color="textSecondary">Apple • Boston, USA</Typography>
                <Typography color="primary" sx={{ py: 2 }}>Full-time • Salary: $85,000 - $95,000 USD</Typography>
                <Typography color="textSecondary">30+ applicants</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">View details</Button>
                <Button variant="contained" color="primary">Apply now</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Marketing Officer</Typography>
                <Typography color="textSecondary">Intel Corp • Bangalore, India</Typography>
                <Typography color="primary" sx={{ py: 2 }}>Part-time • Salary: ₹15,000 - ₹30,000 INR</Typography>
                <Typography color="textSecondary">20+ applicants</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">View details</Button>
                <Button variant="contained" color="primary">Apply now</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Button variant="outlined" color="primary">View all</Button>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
}
