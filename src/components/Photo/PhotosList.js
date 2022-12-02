import PhotoCard from "./PhotoCard";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PhotosList.scss";
const PhotosList = (props) => {
  const photos = props.result.map((image) => (
    <PhotoCard
      key = {image.id}
      title = {image.title}
      image = {
        <img
          style = {{ objectFit: "contain" }}
          width = "200"
          alt = ""
          height = "200"
          src = {image.thumbnailUrl}
          key = {image.id}
        />
      }
      icon = {
        <button>
         {/*<FontAwesomeIcon icon={faHeart} />*/}
        </button>
      }
    />
  ));

  return (
    <div className="photolists">
      <div className="photolist">{photos}</div>;
    </div>
  );
};

export default PhotosList;
