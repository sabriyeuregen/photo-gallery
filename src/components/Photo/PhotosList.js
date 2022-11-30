import PhotoCard from "./PhotoCard";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          src={image.thumbnailUrl}
          key={image.id}
        />
      }
      icon={<FontAwesomeIcon icon={faHeart} />}
    />
  ));

  return <div>{photos}</div>;
};

export default PhotosList;
