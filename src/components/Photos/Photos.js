import { PHOTO_API_URL } from "../../api";
import axios from "axios";
import { useEffect } from "react";
import PhotosItem from "./PhotosItem";
import { useState } from "react";
const Photos = () => {

  const[images, setImages]=useState([])
  const [limit,setLimit] = useState("")
 
    const inputChangeHandler = (e) =>{
        setLimit(e.target.value)
    }


  const getData = async () => {
    //`PHOTO_API_URL?_limit=${limit}`
    const data = await axios("https://jsonplaceholder.typicode.com/photos").then((response) => response);

    setImages(data)
    console.log(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  

  return <div>
     <input type="text"  className="photolimit" value={limit} onChange={inputChangeHandler}></input>
    <PhotosItem data={images}></PhotosItem>
  </div>;
};

export default Photos;
