import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import { useSelector } from 'react-redux';
import { sideMenuSelector } from '../slices/slice';
import SlideShow from '../components/SlideShow';
import { useMediaQuery } from '@mui/material';

const Home = () => {
  
  
  return (
    <div >
        <Navbar></Navbar>

        <div style={{display: 'flex',width: '100%'}}>
        <SideMenu style={{zIndex: '1023000'}} ></SideMenu>
        
        <div style={{}}>
          <SlideShow></SlideShow>
        </div>

        </div>
        

      
       
        
    </div>
  )
}

export default Home