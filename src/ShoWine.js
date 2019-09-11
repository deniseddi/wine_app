import React from 'react'
import { tsPropertySignature } from '@babel/types';
import wineList from './WineList'

function dishToWineColor(dish) {
    const dishes = {
      Poultry: "white",
      Meat: "red",
      Seafood: "white",
      Pasta: "red",
      Vegetarian: "white",
      "Not pairing with food": "red"
    }
    return dishes[dish]
}

function ShoWine(){
    return(
        <section>
            {/* <h1>Riesiling</h1>  */}
            <h1>{wineList[1].color}</h1>
            <h1>{wineList[1].type}</h1>
            {/* how to retrieve element from array in wineList */}
            {/* how to retrieve element from objects in array in wineList */}
        </section>
    )
}

export default ShoWine 