import React from 'react';
import WineList from './WineList';
import WineResults from './WineResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Questions from './Questions';
import ShoWine from './ShoWine';
import Home from './Home';

import './App.css';


class App extends React.Component {

  state = {
    season: "Spring",//Season is part of a question/answer
    dish: "Poultry", // e.target.value? I want to set/update the dish to the button selected value!
    region: "Oceania",
    tastes: "You are not the showy type; you are a little reserved and there is a warm side of you.",
    currentQuestionIndex: 0
  }

   // do I create an handleEventChange for each one of the properties inside state? 
  handleQuestionIndex = (e) => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1 
    })
  }
//very new syntax in React []: , not on the docs yet.
  handleWineLabel = (e, label) => {
    this.setState ({
      [label]: e.target.value,
    })
  }


  render() {
    const { currentQuestionIndex } = this.state
    return(
      <Router>
        <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/questions' render={(routeProps) => <Questions {...routeProps} onNext={this.handleQuestionIndex} currentQuestionIndex={currentQuestionIndex} handleWineLabel={this.handleWineLabel}/>} />
          <Route path='/show-wine' render={() => <ShoWine data={this.state} />} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
