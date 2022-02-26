import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import ChooseList from './ChooseList';

const useStyles = makeStyles(theme => ({
    heading: {
        textAlign: 'center',
        margin: '3rem 0rem'
    },
    cardItem:{
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}))
const Choose = () => {
    const classes = useStyles();

    const [card] = useState([
        { 
          id: '1',
          icon: '',
          title: 'Wide Range of Properties',
          description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown ',
        },
        { 
            id: '2',
            icon: '',
            title: 'Trusted by Thousands',
            description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown ',
      },
      { 
            id: '3',
            icon: '',
            title: 'Financing made easy',
            description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown ',
      }

      ]);
  return (
    <div>
        <div className={classes.heading}>
            <Typography variant='h4' gutterBottom>Why Choose Us</Typography>
            <Typography variant='h6'>We provide full service at every step.</Typography>
        </div>
            <Grid container className={classes.cardItem}>
                {card.map(cards => {
                    return(
                        <Grid item sm={3} xs={12}>
                            <ChooseList card = {cards}/>
                        </Grid>
                    )
                })}
            </Grid>
    </div>
  )
}

export default Choose