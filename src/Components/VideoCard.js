import React from 'react'



const VideoCard = (props) => {

    
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h2>- {props.title} -</h2>
                <p>- {props.date} -</p>
                 <iframe src={props.url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    style={{height: '400px', width: '600px'}}
                    />
                    
            </div>
        )
    

}

export default VideoCard