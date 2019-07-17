import React, {useEffect, useState} from 'react'
import PhotoCard from './PhotoCard'
import axios from 'axios'
import moment from 'moment'
import VideoCard from './VideoCard'
import Modal from './Modal'




const Photo = () => {
        
        const currentDate = moment().format("YYYY-MM-DD");
        console.log(currentDate)
        const [photoData, setPhotoData] = useState()
        const [query, setQuery] = useState(`api_key=${process.env.REACT_APP_API_KEY}&&date=${currentDate}`)
        const [show, setShow] = useState(false)

            const showModal = () => {
                setShow(true);
            };

            const hideModal = () => {
                setShow(false);
            };
    
        useEffect(() => {
            
          axios.get(`https://api.nasa.gov/planetary/apod?${query}`)
          .then(res => {
              console.log(res.data)
              setPhotoData(res.data) 
          })
          .catch(err => console.log(err));

      },[query]);

      console.log(photoData)


      if (!photoData) {
        return <h2>Loading.....</h2>

    } else if (photoData.media_type === 'video'){
        return(
            <div>
                 <VideoCard date={photoData.date} exp={photoData.explanation} url={photoData.url} title={photoData.title}/>
                    <button type="button" style={{marginTop: '25px', background:'#0B3D91', color:'white', border:'none', borderRadius: '5px', padding: '7px'}} onClick={showModal}>
                        Learn More
                    </button>
                 <Modal show={show} handleClose={hideModal} exp={photoData.explanation} title={photoData.title}/>
                 
            </div>
        )
    }else {
        return(
            <div>   
             <PhotoCard date={photoData.date} exp={photoData.explanation} image={photoData.hdurl} title={photoData.title} /> 
                <button type="button" style={{marginTop: '25px', background:'#0B3D91', color:'white', border:'none', borderRadius: '5px', padding: '7px'}} onClick={showModal}>
                     Learn More
                </button>
             <Modal show={show} handleClose={hideModal} exp={photoData.explanation} title={photoData.title}/>   
            </div>
        )
    }    
}

export default Photo
