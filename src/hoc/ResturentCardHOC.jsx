import React from "react"
import RestaurantCard from "../components/RestaurantCard"

export const RestaurantWithPromoted=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )
    }
}


 