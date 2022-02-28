import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import TestimonialList from './TestimonialList';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
root:{
    margin: '1rem 0',
    padding: '2rem 0rem',
    background: '#f5f7fb',
},
heading:{
    textAlign: 'center',
    marginBottom: '4rem'
}
}))

const Testimonial = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <div className={classes.heading}>
            <Typography variant='h3' gutterBottom>Clients Testmonials</Typography>
            <Typography variant='h6'>We collect reviews from our customers.</Typography>
        </div>
         <TestimonialList/>
    </div>
  )
}

export default Testimonial