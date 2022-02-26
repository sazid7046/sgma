import React from 'react';
import {makeStyles}  from '@mui/styles';
import { Card, CardActionArea, CardContent} from '@mui/material';
import { Typography } from '@mui/material';
import icon from '../../assets/icons/icon-1.svg'


const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
        marginBottom: '1rem',
    },
    cardMedia:{
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    media:{
        width: "80px",
        height: "80px",
    }
}));


export default function CardItem({card}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Card>
            <CardActionArea>
                <div className={classes.cardMedia}>
                    <div className={classes.media}>
                        <img style={{transform: 'scale(1.25)'}} src={icon}/>
                    </div>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{card.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}
