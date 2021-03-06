

const wineList = [
      {
        title: "Sparkling wine",
        color:"white",
        dish: ['Seafood','Vegetarian','Not pairing with food'],
        season: ['Spring','Autumn','Summer'],
        // personality? here? : 
        notes: "apple, pear, yeast",
        body: "Medium",
        country: ["Australia","Italy"],
        region: ["Australia & New Zealand","Europe"]
      },
      {
        title:"Sauvignon Blanc",
        color:"white",
        dish: ['Seafood','Poultry','Vegetarian'],
        season: ['Spring','Autumn','Summer'],
        notes:"herbaceous, grassy, passionfruit, citrus, grapefruity",
        body:"Light to Medium",
        country: ["New Zealand","Australia"],
        region: "Australia & New Zealand"
      },
      {
        title: "Chardonnay",
        color:"white",
        dish: ['Pasta','Seafood','Poultry','Vegetarian','Say Cheese!'],
        season: ['Winter','Autumn'],
        notes:"pear, apple, oak, creamy",
        body:"Medium",
        country: ["France","Australia"],
        region: ["Europe","Australia & New Zealand"]
      },
      {
        title: "Chardonnay",
        color:"white",
        dish: ['Pasta','Seafood','Poultry','Vegetarian','Say Cheese!'],
        season: ['Winter','Autumn','Spring'],
        notes:"floral, tropical fruit, apple, pear,",
        body:"Medium",
        country: ["Chile"],
        region: ["South America"]
      },
      {
        title:"Viognier" ,
        color:"white",
        dish: ['Seafood','Poultry','Vegetarian','Say Cheese!'],
        season: ['Winter','Autumn'],
        notes: "floral, peach, apricot, pear, fruity",
        body:"Medium",
        country:"Australia" ,
        region: "Australia & New Zealand"
      },
      {
        title:"Pinot Gris",
        color:"white",
        dish: ['Seafood','Pasta','Poultry','Vegetarian','Say Cheese!','Not pairing with food'],
        season: ['Summer','Spring','Autumn'],
        notes:"pear, peach, white nectarine, silky",
        body:"Light",
        country:["France","Australia"],
        region:["Europe","Australia & New Zealand"] 
      },
      {
        title:"Pinot Grigio",
        color:"white",
        dish: ['Seafood','Poultry','Vegetarian','Say Cheese!','Not pairing with food'],
        season: ['Summer','Spring','Autumn'],
        notes:"crisp, zesty, pear, peach, apricot",
        body:"Light",
        country:"Italy",
        region:"Europe"
      },
      {
        title:"Pinot Blanc",
        color:"white",
        dish: ['Seafood','Poultry','Vegetarian','Say Cheese!'],
        season: ['Winter','Spring','Autumn'],
        notes:"pear, apple, floral",
        body:"Medium",
        country:["France", "Germany"],
        region: "Europe"
      },
      {
        title:"Chenin Blanc",
        color:"white",
        dish: ['Seafood','Poultry','Vegetarian'],
        season: ['Summer','Autumn','Spring'],
        notes:"peaches, fruity",
        body:"Light",
        country:["France","South Africa"],
        region: ["Europe","Africa"]
      },
      {
        title:"Gewurztraminer",
        color:"white",
        dish: ['Seafood','Poultry','Say Cheese!'],
        season: ['Winter','Autumn','Spring'],
        notes:"lychee nut, spices, citrus, rose petals",
        body:"Medium",
        country: ["Germany", "South Africa"],
        region: ["Europe", "Africa"]
      },
      {
        title:"Riesling",
        color:"white",
        dish: ['Seafood','Vegetarian','Say Cheese!'],
        season: ['Spring','Autumn','Summer'],
        notes:"apple, lemon, floral, apricot, fruity",
        body:"Light",
        country:["Germany", "Australia"],
        region:["Europe","Australia & New Zealand"] 
      },
      {
        title:"Zinfandel",
        color:"white",
        dish: ['Pasta','Poultry','Vegetarian','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"berries, citrus, melon",
        body:"Light",
        country:"USA",
        region:"North America" 
      },
      {
        title:"Moscato",
        color:"white",
        dish: ['Not pairing with food','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"sweet, floral, honeysuckle",
        body:"Light",
        country:"Italy",
        region:"Europe" 
      },
      {
      title: "Sparkling Shiraz",
      color:"red",
      dish: ['Meat','Say Cheese!','Not pairing with food'],
      season: ['Spring','Summer'],
      notes:"ripe plum, spice, chocolate, earthy",
      body:"Medium",
      country: "Australia",
      region: "Australia & New Zealand"
    },
      {
        title:"Pinot Noir",
        color:"red",
        dish: ['Seafood','Poultry','Pasta','Not pairing with food','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"berries, dark cherry,spice",
        body:"Light to Medium",
        country:"New Zealand",
        region:"Australia & New Zealand" 
      },
      {
        title:"Merlot",
        color:"red",
        dish: ['Pasta','Meat'],
        season: ['Spring','Autumn','Winter'],
        notes:"blackberry, plum, currant, chocolate, vanilla",
        body:"Medium",
        country:"Australia",
        region:"Australia & New Zealand" 
      },
      {
        title:"Zinfandel",
        color:"red",
        dish: ['Pasta','Meat','Say Cheese!','Not pairing with food'],
        season: ['Spring','Autumn','Winter'],
        notes: "berries, jammy, cherry, earthy",
        body: "Medium to full",
        country: "USA",
        region: "North America"
      },
      {
        title:"Cabernet Sauvignon",
        color:"red",
        dish: ['Pasta','Meat'],
        season: ['Spring','Autumn','Winter'],
        notes:"blueberries, black currant, cassis, raspberries, oaky",
        body:"Full",
        country:["Australia","USA"],
        region:["Australia & New Zealand","North America"]
      },
      {
        title:"Syrah",
        color:"red",
        dish: ['Pasta','Meat','Say Cheese!','Vegerarian'],
        season: ['Spring','Autumn','Winter'],
        notes:"peppery, spice, blackberry",
        body:"Medium to heavy",
        country:"France",
        region:"Europe" 
      },
      {
        title:"Shiraz",
        color:"red",
        dish: ['Pasta','Meat','Say Cheese!','Vegerarian'],
        season: ['Spring','Autumn','Winter'],
        notes:"plum, blackberry, spice,vanilla, opulent",
        body:"Medium to full",
        country:"Australia",
        region:"Australia & New Zealand" 
      },
      {
        title:"Petite Sirah",
        color:"red",
        dish: ['Meat'],
        season: ['Spring','Autumn','Winter'],
        notes:"blackberry, pepper, jammy",
        body:"Full",
        country:"France",
        region:"Europe" 
      },
      {
        title:"Sangiovese",
        dish: ['Meat','Pasta','Say Cheese!','Vegerarian'],
        season: ['Spring','Autumn','Winter','Summer'],
        color:"red",
        notes:"cherry,plum, fruity, spice",
        body:"Medium",
        country:"Italy",
        region:"Europe" 
      },
      {
        title:"Cabernet Franc",
        color:"red",
        dish: ['Meat','Pasta','Chicken','Say Cheese!','Vegerarian'],
        season: ['Spring','Winter'],
        notes:"raspberry, cassis, herbaceous",
        body:"Medium",
        country:"France",
        region:"Europe" 
      }, 
      {
        title:"Barbera",
        color:"red",
        dish: ['Meat','Pasta'],
        season: ['Autumn','Winter'],
        notes:"blackberry, cherry, herbaceous, violet",
        body:"Medium",
        country:"Italy",
        region:"Europe" 
      },
      {
        title:"Malbec",
        color:"red",
        dish: ['Meat','Pasta','Say Cheese!'],
        season: ['Spring','Autumn','Winter'],
        notes:"black cherry, raspberry, plum, floral, herbaceous",
        body:"Medium to full",
        country:"Argentina",
        region:"South America" 
      },
      {
        title:"Tempranillo",
        color:"red",
        notes:"blueberry, cherry, plum, violets,tobacco, allspice",
        body:"Medium",
        dish: ['Pasta','Meat','Say Cheese!'],
        season: ['winter','Autumn','Spring'],
        country:"Spain",
        region:"Europe" 
      },
      {
        title:"Carménère",
        color:"red",
        dish: ['Seafood','Poultry','Pasta','Not pairing with food','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"red berries, cherry, dark chocolate, smoky",
        body:"Medium",
        country:"Chile",
        region:"South America" 
      },
      {
        title:"Pinotage",
        color:"red",
        dish: ['Seafood','Meat','Poultry','Pasta','Not pairing with food','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"plum, blackberry, smoky, licorice",
        body:"Medium to full",
        country:"South Africa",
        region:"Africa" 
      },
      {
        title:"Grenache",
        color:"red",
        dish: ['Meat','Poultry'],
        season: ['Autumn','Winter'],
        notes:"raspberry, mulberry, spice",
        body:"Medium",
        country:"Spain",
        region:"Europe" 
      },
      {
        title:"GSM - Grenache, Shiraz, Mourvèdre",
        color:"red",
        dish: ['Seafood','Poultry','Pasta','Not pairing with food','Say Cheese!'],
        season: ['Spring','Autumn','Summer','Winter'],
        notes:"blackcurrant, red fruits, chocolate, earthy",
        body:"Medium to full",
        country:"Australia",
        region:"Australia & New Zealand" 
      },
      {
        title:"Rosé",
        color:"rosé",
        dish: ['Seafood','Vegetarian','Not pairing with food','Poultry','Say Cheese!'],
        season: ['Spring','Autumn','Summer'],
        notes:"floral, strawberry, rose petal, citrus",
        body:"Light",
        country:["Australia","France"],
        region:["Australia & New Zealand", "Europe"] 
      },
]
export default wineList;







 
  
  
  
  	
  
  	
  
  
  
  
  
  
 