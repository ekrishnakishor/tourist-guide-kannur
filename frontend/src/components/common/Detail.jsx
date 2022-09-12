import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import API from '../../API';
import Footer from './Footer';
import Header from './Header';

export default function Detail() {
    const searchParam= useParams()
    const search=searchParam.id
    const [loading, setLoading]= useState(true)
    const [place, setPlace]= useState('')
    const api=new API()
    useEffect(()=>{
        api.getPlaces(search)
        .then((place) => {
            setPlace(place[0])
            setLoading(false)
          })
    },[])
    console.log(place);
  return (
    <>
    <Header />
    {loading?(
        <div>
            Loading ...
        </div>
    ):(
        <div>
        <div class="item">
        <div class="item-image">
          <img src={place.image} alt="image" />
        </div>
        <div class="item-text">
          <h1>{place.name}</h1>
          <p>{place.place_type}</p>
          <p>{place.description}</p>
        </div>
        <a href={place.googel_map_link} target="_blank">
    <button>Direction</button></a>
      </div>
    </div>
    )}
    <br />
<Footer />
</>
  )
}
