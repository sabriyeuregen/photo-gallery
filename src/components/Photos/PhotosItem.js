import PhotoCard from "./PhotoCard";
const PhotosItem = (props) => {
 const images = props.data.map((image) => (
    <PhotoCard
      key={image.id}
      title={image.title}
      image={
        <img
          style={{ objectFit: "contain" }}
          width="200"
          alt=""
          height="200"
          src={image.url}
          key={image.id}
        />
      }
    />
  ));



  return <div>{images}</div>;
};

export default PhotosItem;
