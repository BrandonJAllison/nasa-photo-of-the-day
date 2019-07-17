import React from 'react'



const VideoCard = (props) => {

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>{props.title}</h2>
             <iframe src={props.url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                style={{height: '400px', width: '600px'}}
                />
                <div style={{height: '200px', width: '90%'}}>
            <p>{props.exp}</p>
                </div>
        </div>
    )


}

export default VideoCard