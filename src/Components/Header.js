import React from 'react'
import logo from './logo.png'



// import './navbar.scss'


const header = {
    background: '#0B3D91',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    color: '#6049e6',
    zIndex: '2',
    boxShadow: '0px 6px 10px gray',
    boxShadow: '.1px 2.1px 3.1px #FC3D21'
    
}
const link ={
    color: '#57b7bd',
    padding: '2px',
    paddingBottom: '4px',
    textDecoration: 'none'
     
}


const NavBar = (props) => {

return (

    <div style={header}>
        <img src={logo} style={{height:'40px', width:'40px', margin:'5px'}}/>
        <p style={{color:'white', marginLeft: '2%', marginRight: '2%'}}>NASA Photo Of The Day</p>
        <img src={logo} style={{height:'40px', width:'40px', margin:'5px'}}/>
    </div>
)
}

export default NavBar


