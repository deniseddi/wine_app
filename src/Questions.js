import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import QuestionList from './QuestionList'
import { Link } from 'react-router-dom'
// import QuestionList from '/QuestionList'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Poultry');

  function handleChange(event) {
    setValue(event.target.value);
  }

  const { currentQuestionIndex,handleWineLabel } = props

  return ( //can I later customise each component? eg. give it a map on Question.n4 ? Add icons to each question for the 3rd? Or should I step back and write code for each component , each round of questions. 
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{QuestionList[currentQuestionIndex].question}</FormLabel>
        <RadioGroup aria-label="question" name="question1" value={value} onChange={handleChange}>
           {QuestionList[currentQuestionIndex].answers.map(answer => {
                return <FormControlLabel onClick={e => handleWineLabel(e, QuestionList[currentQuestionIndex].label)} key={answer} value={answer} control={<Radio />} label={answer} />   
            })                           
                
            }
         
        </RadioGroup>
        {currentQuestionIndex === 3 ? <Link to="show-wine">win</Link> : <Button onClick={props.onNext} variant="contained" color="secondary" className={classes.button}>next!</Button>}
      </FormControl>
    </div>
  )
}





      /* <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{QuestionList[1].question}</FormLabel>
        <RadioGroup aria-label="question" name="question1" value={value} onChange={handleChange}>
           {QuestionList[1].answers.map(answer => {
                return <FormControlLabel value={answer} control={<Radio />} label={answer} />  
                })
            }
        </RadioGroup>
        <Button variant="contained" color="secondary" className={classes.button}>Go back</Button>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{QuestionList[2].question}</FormLabel>
        <RadioGroup aria-label="question" name="question1" value={value} onChange={handleChange}>
           {QuestionList[2].answers.map(answer => {
                return <FormControlLabel value={answer} control={<Radio />} label={answer} />  
                })
            }
        </RadioGroup>
        <Button variant="contained" color="secondary" className={classes.button}>Go back</Button>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{QuestionList[3].question}</FormLabel>
        <RadioGroup aria-label="question" name="question1" value={value} onChange={handleChange}>
           {QuestionList[3].answers.map(answer => {
                return <FormControlLabel value={answer} control={<Radio />} label={answer} />  
                })
            }
        </RadioGroup>
        <Button variant="contained" color="secondary" className={classes.button}>Go back</Button>
      </FormControl> */

 

