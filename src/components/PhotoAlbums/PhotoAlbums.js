import { PHOTO_API_URL } from "../../api";
import axios from "axios";
import { useEffect } from "react";

const PhotoAlbums = () => {

  async function getData() {
    const result = await axios(PHOTO_API_URL).then((response) => response);

    console.log(result.data);
  }

  useEffect(() => {
    getData()
  }, []);

 

  return <div></div>;
};

export default PhotoAlbums;
