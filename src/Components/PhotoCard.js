import React, {useState, useEffect} from 'react'



const PhotoCard = (props) => {

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>- {props.title} -</h2>
            <p>- {props.date} -</p>
            <img src={props.image}/>
        </div>
    )


}

export default PhotoCard