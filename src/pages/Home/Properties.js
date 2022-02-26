import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import PropertiesList from './PropertiesList';
import PropertiesCategory from './PropertiesCategory';
import propertiesData from './PropertiesData';

const useStyles = makeStyles(theme => ({
    root:{
        background: '#f5f7fb',
        // background: '#000',
        padding: '2rem 0',
        // border: '2px solid #000'
    },
    heading: {
        textAlign: 'center',
        margin: '3rem 0rem'
    },
    cardItem:{
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    button:{
        margin: '1rem auto'
    }
}))
const allCategories =[ 'all' ,...new Set(propertiesData.map(data => data.category))]

const Properties = () => {
    const classes = useStyles();
    const [propertiesItems, setpropertiesItems] = useState(propertiesData); 
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all') {
          setpropertiesItems(propertiesData)
          return;
        }
        const newProperty = propertiesData.filter(data => data.category === category)
        setpropertiesItems(newProperty);
        }

  return (
    <div className={classes.root}>
        <div className={classes.heading}>
            <Typography variant='h3'>Featured Properties</Typography>
            <Typography variant='h6'>These are our featured properties</Typography>
        </div>
            <PropertiesCategory categories={categories} filterItems={filterItems}/>
        <Grid container className={classes.cardItem}>
            {propertiesItems.map(cards => {
                return(
                    <Grid item sm={5} xs={12} style={{marginBottom: '3rem', border: '2px dotted #000'}}>
                        <PropertiesList card = {cards}/>
                    </Grid>
                )
            })}
        </Grid>
        <div>
            <button className={classes.button}>
                <span>View More</span>
                <div class='liquid'></div>
            </button>
        </div>
        
    </div>
  )
}

export default Properties