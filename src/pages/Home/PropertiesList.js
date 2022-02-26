import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
           flexDirection: 'column' 
        }

    },
    cardMedia:{
        [theme.breakpoints.down('sm')]:{
            minWidth: '100%'
        }
    },
    description:{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    },
    describe: {
        display: 'flex',
        gap: '32%'
    }
}))
const PropertiesList = ({card}) => {
    const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 680 }} className={classes.card}>
        <CardMedia
        className={classes.cardMedia}
          style={{border: '2px dotted #333', maxWidth: '45%'}}
          component="img"
          height="280"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="flat"
        />
        <CardContent>
            <div className={classes.description}>
                <div className={classes.heading}>
                    <Typography variant="h6">Real Luxury Family House Villa</Typography>
                    <Typography variant="subtitle1" gutterBottom>Est St, 77-Central Park South, NYC</Typography>
                </div>
                <div className={classes.describe}>
                    <div className={classes.area}>
                        <Typography variant='subtitle1'>6 Bedrooms</Typography>
                        <Typography variant='subtitle1'>720sq ft</Typography>
                    </div>
                    <div className={classes.room}>
                        <Typography variant='subtitle1'>3 BathRooms</Typography>
                        <Typography variant='subtitle1'>2 Garages</Typography>
                    </div>
                </div>
                <div className={classes.price}>
                    <Typography variant='h6'>$ 150,000</Typography>
                </div>
            </div> 
        </CardContent>
    </Card>
  );
}

export default PropertiesList
