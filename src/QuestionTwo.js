import React from 'react'
import { Link } from 'react-router-dom'

//question two selects the wine by season ( lighter to full body)
function QuestionTwo(props){

    return(
        <section>
            <h1>Wine 2</h1>
            <Link to='/show-wine'>Go to result</Link>
        </section>
        
    )
}

export default QuestionTwo