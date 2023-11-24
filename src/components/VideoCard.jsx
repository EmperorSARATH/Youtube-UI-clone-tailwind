import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Portfolio from '../assets/portfolio.mp4';
import Dragon_Ball from '../assets/Dragon_Ball.mp4';
import Goggins from '../assets/Goggins.mp4';
import Rocket from '../assets/Rocket.mp4';
import Programming from '../assets/Programming.mp4';
import Ronaldinho from '../assets/Ronaldinho.mp4';
 
export default function ActionAreaCard(props) {
  const videos = [Portfolio,Dragon_Ball,Goggins,Rocket,Programming,Ronaldinho];
  const title = ["Portfolio","Dragon_ball","David Goggins", "Rocket league", "Programming","Ronaldinho Elastico"]
  const desc = ["My portfolio website", "Goku Transition video","Goggins motivational speech","Game play of rocket league", "Programming basics", "Ronaldinho elastico compilation"];
  return (
    <Card className='mb-10 p-0 grid grid-cols-1' >
      <CardActionArea>
        <CardMedia
          component="iframe"
          height="195"
          image={videos[props.loop]}
          alt="Video Sarath"
        />
        <CardContent  style={{backgroundColor:"black"}}>
          <Typography gutterBottom variant="h6" component="div" style={{color:"white"}}>
            {title[props.loop]}
          </Typography>
           <Typography gutterBottom  component="p" style={{color:"white"}}>
            {desc[props.loop]}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

