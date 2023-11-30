import React, { useEffect, useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sideMenuChange, sideMenuSelector } from '../slices/slice';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const isClose = useSelector(sideMenuSelector)
  const dispatch = useDispatch()
  console.log(isClose)
  
  return (
    <div style={{
      borderColor: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex'}}>

          <div style={{display: 'flex', paddingLeft: '10px'}}>
            <IconButton style={{margin: 'auto auto auto 10px'}} onClick={() => {
              dispatch(sideMenuChange())}}>
              {isClose? <DensityMediumIcon />: <CloseIcon />}
            </IconButton>
          </div>
          
          <img src='/logo.png' style={{height: '100px'}} />
        </div>
        

        <div style={{
          display: 'flex',
          justifyContent: 'center'}}>
            
            <IconButton style={{ margin: 'auto 20px auto auto'}}>
              <SearchIcon></SearchIcon>
            </IconButton>
            <IconButton style={{margin: 'auto 20px auto auto'}}>
              <Person2OutlinedIcon></Person2OutlinedIcon>
            </IconButton>
            <IconButton style={{margin: 'auto 20px auto auto'}}>
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </IconButton>
        </div>  
        
    </div>
  )
}

export default Navbar