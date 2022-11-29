import PhotoCard from "./PhotoCard";
const PhotosList = (props) => {
 const photos = props.result.map((image) => (
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
  ) );


  return <div>{photos}</div>;
};

export default PhotosList;
