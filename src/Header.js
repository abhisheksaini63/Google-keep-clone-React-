import React from 'react';
import logo from './logo.JPG';

const Header= () =>{
  return (
    <>
        <div className = "header">
            <img className = "logo" src= {logo} alt  = "MyLogo"/>
            <h1>Abhishek Keep</h1>
        </div>
    </>
  );
}

export default Header;
