import React, { useEffect } from 'react';
import {getRestaurants} from "../../actions/restaurantAction";
import { useDispatch, useSelector } from 'react-redux';

export default function CountRestaurent() {
  const dispatch=useDispatch();
  const {loading,error,count,showVegOnly,pureVegRestaurantsCount}=useSelector((state)=>state.restaurants);
  useEffect(()=>{
    dispatch(getRestaurants());
  },[dispatch]);
  return (
    <div>
      {loading ? (<p>Loading restaurant count...</p>):error?(<p>Error:{error}</p>):
      (
        <p className="NumOfRestro">
        {showVegOnly? pureVegRestaurantsCount:count}{" "} <span className="Restro">
          {
            showVegOnly? pureVegRestaurantsCount=== 1? "Restaurant":"Retaurants"
            :count===1
            ?"Restaurant":"Restaurants"
          }
        </span>
      </p>
      )
      }

      <hr />
    </div>
  );
}
