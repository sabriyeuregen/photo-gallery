
const PhotoCard = (props) => {
  return (
    <div className="photo">
      <div className="photo__title">{props.title}</div>
      <div className="photo__image">{props.image}</div>
      <div className="photo__favorite-icon">
        {props.icon}
      </div>
    </div>
  );
};

export default PhotoCard;
