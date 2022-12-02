import  {useContext}  from "react"
import FavoriteContext from "../../store/favorite-context"
const FavoritesList = () => {

    const {items} = useContext(FavoriteContext)
     console.log(items)
  return (
    <div>
       {items.map((item)=>(
        <div>
            <div>{item.image}</div>
            <div>{item.price}</div>
        </div>
       ))}
    </div>
  )
}

export default FavoritesList