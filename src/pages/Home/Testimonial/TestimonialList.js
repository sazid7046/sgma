import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import icon from '../../../assets/icons/quoe.png';
import testimonial from './TestimonialData';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const useStyles = makeStyles(theme => ({
    root:{
        margin: '0 auto'
    },
    cardHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'flex-end',
    },
    cardContent:{
        width: '100%',
        display: 'flex', 
        alignItems:'center',
        gap: '5%',
        marginTop: '1rem'
    },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    prevButton:{
        color: 'hsl(205, 90%, 76%)',
        fontSize: '1.25rem',
        background: 'transparent',
        borderColor: 'transparent',
        transition:  'all 0.3s linear',
        cursor: 'pointer',
        margin: '0 2rem',
        padding: '0',
        '&:hover':{
            color: '#FF385C'
        }
    },
    nextButton:{
        color: 'hsl(205, 90%, 76%)',
        fontSize: '1.25rem',
        background: 'transparent',
        borderColor: 'transparent',
        transition:  'all 0.3s linear',
        padding: '0',
        margin: '0 2rem',
        cursor: 'pointer',
        '&:hover':{
            color:'#FF385C'
        }
    }
}))

const TestimonialList = () => {
    const [index, setIndex] = useState(0);
    const {text, image, name, place} = testimonial[index];
    const classes = useStyles();

    const checkNumber = (number) => {
        if(number > testimonial.length - 1) return 0;
        if(number < 0) return testimonial.length - 1;
        return number
      }
      const nextPerson = () => {
        setIndex(index => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        })
        
      }
      const prevPerson = () => {
        setIndex(index => {
          let newIndex = index - 1;
        return checkNumber(newIndex);
        })
        
      }
  return (
    <Card sx={{ maxWidth: 620 }} className={classes.root}>
      <CardContent>
        <Typography variant="body2" textAlign='center' color="text.secondary">
            {text}            
        </Typography>
        <div className={classes.cardHeader}>
            <div className={classes.cardContent}> 
                <Avatar aria-label="recipe" src={image} sx={{ width: 52, height: 52 }}/>
                <div>
                    <Typography variant='body1'>{name}</Typography>
                    <Typography variant='body2'>{place}</Typography>
                </div>
                
            </div>
            <img src={icon} alt='icon'/>     
        </div>
        <div className={classes.buttonContainer}>
            <button className={classes.prevButton} onClick = {prevPerson}>
            <ChevronLeftIcon/>
            </button>
            <button className={classes.nextButton} onClick = {nextPerson}>
            <ChevronRightIcon/>
            </button>
        </div>
      </CardContent>
    </Card>
  );
}
export default TestimonialList
