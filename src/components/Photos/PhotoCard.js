import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PhotoCard = (props) => {
  return (
    <div className="photo">
        <div className="photo__title">{props.title}</div>
        <div className="photo__image">{props.image}</div>
        <div className="photo__favorite-icon"><FontAwesomeIcon icon={faHeart} /></div>
    </div>
  )
}

export default PhotoCard