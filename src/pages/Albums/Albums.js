import "./Albums.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import PhotosList from "../../components/Photo/PhotosList";
const Albums = () => {

  const [images, setImages]= useState([])

  const fetchPhotos = async () =>{

    const data = await axios(`https://jsonplaceholder.typicode.com/photos`).then(response => response.data)
     
    setImages(data)
  
  }
 
   useEffect(() => {
     fetchPhotos()
   },[])

  return (
    <div>
      <PhotosList data={images}/>
  
    </div>
  )
}

export default Albums;