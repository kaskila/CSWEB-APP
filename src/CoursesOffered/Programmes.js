import React from 'react';
import {Paper,Container, Grid, Typography } from '@mui/material';
import TourCard from '../TourCards/TourCard';
import Programs from '../data.json'
import Step1 from '../Step1';


const Programmes = () => {
  return (
    <>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '2px' }}>
        <Container>
          {Programs.map((program)=>(
            <>
              <Typography
                variant='h4'
                component="h2"
                marginTop={2}
                marginBottom={3}
              >
                {program.name}
              </Typography>
              <Grid container spacing={5}>
                  {program.tours.map((tour,index)=><TourCard tour={tour} key={index}/>)}
              </Grid>
            </>
          ))}
          
        </Container>
        
      </Paper> 
      <Step1/>
    </>
  );
};

export default Programmes;
