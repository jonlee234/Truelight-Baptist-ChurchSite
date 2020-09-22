import React from "react";
import { Link } from "react-router-dom";
import {Button, Icon} from 'semantic-ui-react'
import './HeroBanner.css'


export default function HeroBanner() {
  return (
<div className= "hero-container">
    {/* <video src='/videos/video2.mp4' autoPlay loop muted/> */}
    <h1>Welcome to True Light Baptist Church</h1>
    <p>A church without Walls</p>
    <div className= "hero-btns">
    <Button as={Link} to= './about-us' animated color = "brown" size = 'big'>
      <Button.Content visible>Get Started</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow down' />
      </Button.Content>
    </Button>
    </div>
</div>
   
  );
}
