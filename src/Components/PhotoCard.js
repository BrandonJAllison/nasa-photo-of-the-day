import React, {useState, useEffect} from 'react'



const PhotoCard = (props) => {

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>{props.title}</h2>
            <img src={props.image}/>
            <div style={{height: '200px', width: '90%'}}>
            <p style={{height: '200px', width: '100%', textAlign:'center'}}>{props.exp}</p>
            </div>
        </div>
    )


}

export default PhotoCard