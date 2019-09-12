
let QuestionList = [
    {
        //adding label made it easier when updating the state.
        label: "dish",
        question: "Are you pairing your wine with food?", 
        //"yes" or "no" would be preferable and under "yes", the options"
        answers: [
            {
                name:"Poultry",
                image:""
            },
            {
                name: "Meat",
                image:""
            },
            {
                name:"Seafood",
                image:""
            },
            {
                 name:"Pasta",
                 image:""
            },
            {
                name:"Vegetarian",
                image:""
            },
            {
                name: "Say Cheese!",
                image:""
            },
            {
                name:"Not pairing with food",
                image:""
            }
            ]
    },
    {
        label: "season",
        question: "What is the current time of the year?", 
        answers: [
            {
                name:"Spring",
                image:"https://i.imgur.com/005yPjQ.jpg?1"
            },
            {
                 name:"Summer",
                 image:"https://i.imgur.com/3iuaw7f.jpg?1"
            },
            {
                 name:"Autumn",
                 image:"https://i.imgur.com/C9l7aYE.jpg?1"
            },
            {
                 name:"Winter",
                 image:"https://i.imgur.com/2ysTO6d.jpg?1"
            }
        ]
    },
    {
        label: "tastes",
        question: "Wine taste and personality go together; so which would describe you better?", 
        answers: [
            {
                name:"A dreamer. You seek to make the world a better place.",
                image:""
            },
            {
                name:"You are difficult. You are demanding. But oh oh oh so worth it!",
                image:""
            },
            {
                name:"You are a sweetie, there is no denial. Everybody likes you.",
                image:""
            },
            {
                name:"You are not the showy type; you are a little reserved and there is a warm side of you.",
                image:""
            }
        ]
            
    },
    {   
        label: "region",
        imageMap: "https://i.imgur.com/xvFwozL.gif",
        question: "Are you feeling adventurous? Pick a popular wine region!", 
        answers: [
            {
                name:"North America",
                image:""
            },
            {
                name:"South America",
                image:""
            },
            {
                name:"Africa",
                image:""
            },
            {
                name:"Oceania",
                image:""
            },
            {
                name:"Europe",
                image:""
            },
            {
                name:"Pick one for me!",
                image:""
            }
        ]
    }
  ]

  export default QuestionList;
  