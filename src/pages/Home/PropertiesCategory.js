import React from 'react';
import { makeStyles } from '@mui/styles';
import { Hidden } from '@mui/material';

const useStyles = makeStyles(theme => ({
    button:{
        padding: '1.3em 3em',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        fontWeight: '500',
        color: '#000',
        backgroundColor:' #fff',
        border: 'none',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        outline: 'none',
        '&:hover':{
            backgroundColor: '#ff385c',
            boxShadow: '0px 15px 20px',
            color: '#fff',
            transform: 'translateY(-6px)'
        }
    }
    
}))

const PropertiesCategory = ({categories, filterItems}) => {
    const classes = useStyles();
  return (
    <Hidden smDown>
      <div className='btn-container' style={{display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2.5rem'}}>
      {categories.map((category, index) => {
        return(
          <div>
            <button className={classes.button} key={index} onClick={() => filterItems(category)}>{category}</button>
          </div>
        )
      })}
    </div> </Hidden>
  )
}

export default PropertiesCategory