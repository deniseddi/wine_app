
let QuestionList = [
    {
        //adding label made it easier when updating the state.
        label: "dish",
        question: { 
            title:"Are you pairing your wine with food?",
            imageMap:""
        }, 
        //"yes" or "no" would be preferable and under "yes", the options"
        answers: [
            {
                name:"Poultry",
                image:"",
                className: "poultry"
            },
            {
                name: "Meat",
                image:"",
                className: "meat"
            },
            {
                name:"Seafood",
                image:"",
                className: "seafood"
            },
            {
                 name:"Pasta",
                 image:"",
                 className: "pasta"
            },
            {
                name:"Vegetarian",
                image:"",
                className: "veggie"
            },
            {
                name: "Say Cheese!",
                image:"",
                className: "cheese"
            },
            {
                name:"Not pairing with food",
                image:"",
                className: "noFood"
            }
            ]
    },
    {
        label: "season",
        question: { 
            title: "What is the current time of the year?",
            imageMap:""
        },

        answers: [
            {
                name:"Spring",
                className:"",
                image:"https://i.imgur.com/005yPjQ.jpg?1"
            },
            {
                 name:"Summer",
                 className:"",
                 image:"https://i.imgur.com/3iuaw7f.jpg?1"
            },
            {
                 name:"Autumn",
                 className:"",
                 image:"https://i.imgur.com/C9l7aYE.jpg?1"
            },
            {
                 name:"Winter",
                 className:"",
                 image:"https://i.imgur.com/2ysTO6d.jpg?1"
            }
        ]
    },
    {
        label: "tastes",
        question: {
            title: "Wine taste and personality go together; so which would describe you better?",
            imageMap:""
        },

        answers: [
            {
                name:"A dreamer. You seek to make the world a better place.",
                className:"dreamer",
                image:""
            },
            {
                name:"You are difficult. You are demanding. But oh oh oh so worth it!",
                className:"difficult",
                image:""
            },
            {
                name:"You are a sweetie, there is no denial. Everybody likes you.",
                className:"sweetie",
                image:""
            },
            {
                name:"You are not the showy type; you are a little reserved and there is a warm side of you.",
                className:"reserved",
                image:""
            }
        ]
            
    },
    {   
        label: "region",
        question: {
            title: "Are you feeling adventurous? Pick a popular wine region!", 
            imageMap: "https://i.imgur.com/xvFwozL.gif?1",
        },
        answers: [
            {
                name:"North America",
                className:"north",
                image:""
            },
            {
                name:"South America",
                className:"south",
                image:""
            },
            {
                name:"Africa",
                className:"africa",
                image:""
            },
            {
                name:"Australia & New Zealand",
                className:"oceania",
                image:""
            },
            {
                name:"Europe",
                className:"europe",
                image:""
            },
            {
                name:"Pick one for me!",
                className:"pick",
                image:""
            }
        ]
    }
  ]

  export default QuestionList;
  