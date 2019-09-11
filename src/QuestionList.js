
let QuestionList = [
    {
        //adding label made it easier when updating the state.
        label: "dish",
        question: "Are you pairing your wine with food?", 
        //"yes" or "no" would be preferable and under "yes", the options"
        answers: ["Poultry", "Meat","Seafood","Pasta","Vegetarian","Say Cheese!","Not pairing with food"]
    },
    {
        label: "season",
        question: "What is the current time of the year?", 
        answers: ["Spring", "Summer","Autumn","Winter"]
    },
    {
        label: "tastes",
        question: "Wine taste and personality go together; so which would describe you better?", 
        answers: [
                    "A dreamer. You seek to make the world a better place.",
                    "You are difficult. You are demanding. But oh oh oh so worth it!",
                    "You are a sweetie, there is no denial. Everybody likes you.",
                    "You are not the showy type; you are a little reserved and there is a warm side of you."
                 ]
            
    },
    {   
        label: "region",
        question: "Are you feeling adventurous? Pick a popular wine region!", 
        answers: ["North America", "South America","Africa","Oceania","Europe","Pick one for me!"]
    }
  ]

  export default QuestionList;
  