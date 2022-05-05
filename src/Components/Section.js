import React from 'react';
import { Button } from './Button';
import './../Css/Section.css';
import './../Css/App.css';

function Section() {
  return (
    <div className='container'>
        <video src='videos/video-1.mp4' autoPlay muted loop/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What Are You Waiting for?</p>
        <div className='container-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch More <i className="fa-solid fa-circle-play"></i></Button>
        </div>
    </div>
  )
}

export default Section;