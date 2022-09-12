import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import {push} from 'connected-react-router'

const Thumbnail = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);


  const handleClick=((item)=>{
    // navigate(/{item.name})
    dispatch(push(`/${item}`))
  })
  return (
    <>
      <div class="item" >
        <div class="item-image">
          {showLikeButton && (
            <div class="like">
              <img
                class="like"
                src={Imglike}
                alt="favorites"
                onClick={() => {
                  clickFavourite(place);
                }}
              />
            </div>
          )}
          <img src={place.image} alt="image" onClick={()=>handleClick(place.name)}/>
        </div>
        <div class="item-text"onClick={()=>handleClick(place.name)}>
          <h1>{place.name}</h1>

        </div>
      </div>
    </>
  );
};

export default Thumbnail;
