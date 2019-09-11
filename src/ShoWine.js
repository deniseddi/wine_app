import React from 'react'
import { tsPropertySignature } from '@babel/types';
import wineList from './WineList'
import { Badge } from '@material-ui/core';
import _ from 'lodash';




// if (result === ""){
//     return "Too Bad, no match...what about some tap water?";
// }


function ShoWine(props){

    const data = props.data
    // console.log(wineList.filter(wine => wine.dish.includes(data.dish)))
   
    let result =  wineList.filter( w => w.dish.includes(data.dish)).filter(w => w.season.includes(data.season)).filter(w => w.region.includes(data.region))
    
    let finalResult = _.sample(result) 
    // console.log (finalResult.title) 
    // getting error : title of undefined
    if (finalResult = []){ //not sure if working 
        return(
            <h1>Oh, too bad! No match for you...what about some tap water?</h1>
        ) 
    } else {
        return(
            <section>
                <h1> Here is your match: {finalResult.title} </h1>
                <h1> Wine taste notes: {finalResult.notes} </h1>
            </section>
        )
    }
    
}

export default ShoWine 

