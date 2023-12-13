import { Box, Icon, fabClasses, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sideMenuArrowHover, sideMenuArrowHoverSelector, sideMenuSelector } from '../slices/slice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const SideMenu = () => {
    const isHover = useSelector(sideMenuArrowHoverSelector)
    const isTablet = useMediaQuery('(min-width: 600px )')
    const widthIs = isTablet? '50%':'100%'
    const leftIs = isTablet? '-50%':'-100%'
    const isClose = useSelector(sideMenuSelector)
    const dispatch = useDispatch()
    const close = isClose? 'translateX(0)' : 'translateX(100%)'
    const liStyle = {
        fontSize: 'x-large',
        padding: '10% 0 10px 20px'
    }

    const hideArrow = {
        display: 'none'
    }
    const arrowIconStyles = {
        margin : '0 0 0 20px',
        transform: 'translateY(5px)',
    }
    console.log(isHover)
    

    
  return (
    <div style={{zIndex: '10000',
    position: 'absolute',
    left: leftIs,
    transform:close, 
    transition: '0.2s',
    width: widthIs
    }}>
        <Box sx={{
            height: '90vh',
            border: 'solid 1px black'
        }} >
            <ul style={{
                listStyle: 'none',
                height: '100%'
            }}>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(1))}} style={liStyle}>New arrivals<ArrowForwardIosIcon style={isHover == 1 ? arrowIconStyles : hideArrow}/></li>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(2))}} style={liStyle}>Trending<ArrowForwardIosIcon style={arrowIconStyles}/></li>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(3))}} style={liStyle}>Mens<ArrowForwardIosIcon style={arrowIconStyles}/></li>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(4))}} style={liStyle}>Ladies<ArrowForwardIosIcon style={arrowIconStyles}/></li>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(5))}} style={liStyle}>Kids<ArrowForwardIosIcon style={arrowIconStyles}/></li>
                <li onMouseEnter={() => {dispatch(sideMenuArrowHover(6))}} style={liStyle}>Contact us<ArrowForwardIosIcon style={arrowIconStyles}/></li>
            </ul>
        </Box>
        
    </div>
  )
}

export default SideMenu




