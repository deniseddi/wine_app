import React from 'react'
import { tsPropertySignature } from '@babel/types';
import wineList from './WineList'
import { Badge } from '@material-ui/core';
import _ from 'lodash';
import { Link } from 'react-router-dom'





function ShoWine(props) {

    const wineQuotes = [
        "Wine is the answer…What was the question?",
        "I make wine disappear. What is your super power?",
        "Save water, drink wine",
        "Wine improves with age. I improve with wine",
        "You can’t buy happiness, but you can buy wine and that is kind of the same thing"
    ]

    const data = props.data

    let result = wineList.filter(w => w.dish.includes(data.dish)).filter(w => w.season.includes(data.season)).filter(w => w.region.includes(data.region))

    let finalResult = _.sample(result)

    if (finalResult === undefined) {
        return (
            <h1>Oh, too bad! No match for you...what about some tap water?</h1>
        )
    } else {
        return ( //Css and can add image here
            <div class="background">
                <section class="wineResult">
                    <div class="innerboxResult">
                        <div class="box1">
                            <div class="glass">
                                <div class="a">
                                </div>
                                {finalResult.color === "white" ? <div class="b2"></div> : <div class="b"></div>}
                                <div class="rod">
                                </div>
                                <div class="base">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1><span className="wineMatch">Here is your match: </span><span className="wineMatchName">{finalResult.title}</span></h1>
                        <h1 className="wineMatch"> Wine tasting notes: <span
                            className="wineMatchName">{finalResult.notes}</span></h1>
                        <h3 className="restart-link">Click <Link className="click" to="/">here </Link> to start again.</h3>
                    </div>
                </section>
                <footer>
                    <h2 class="wineQuotes">"{_.sample(wineQuotes)}"</h2>
                </footer>
            </div>

        )
    }

}

export default ShoWine

