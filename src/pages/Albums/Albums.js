import "./Albums.scss";
import { useEffect, useState } from "react";
import PhotosList from "../../components/Photo/PhotosList";

const Albums = () => {
  const [images, setImages] = useState([]);

  const fetchPhotos = async () => {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=12"
    )
      .then((response) => response.json())
      .then((response) => response);

    setImages(result);
    console.log(result);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <PhotosList result={images}></PhotosList>
    </div>
  );
};

export default Albums;
