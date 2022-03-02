const beers = [
    {
        title: "Mango Bay",
        sub: "Mad Scientist Beer",
        text: "Pale Ale - American"
    },
    {
        title: "Távoli Galaxis",
        sub: "Rothbeer Brewery",
        text: "IPA - American"
    },
    {
        title: "Flying Rabbit AIPA",
        sub: "MONYO Brewing Co.",
        text: "IPA - American"
    },
    {
        title: "Liquid Cocaine",
        sub: "Mad Scientist Beer",
        text: "IPA - Imperial"
    },
    {
        title: "Organic Chocolate Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - English"
    },
    {
        title: "Bracia",
        sub: "Thornbridge Brewery",
        text: "Strong Ale - English"
    },
    {
        title: "Oatmeal Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - Oatmeal"
    },
    {
        title: "Black Tokyo Horizon",
        sub: "BrewDog",
        text: "Stout - American Imperial"
    },
    {
        title: "Vintage Ale",
        sub: "Fuller's",
        text: "Old Ale"
    },
    {
        title: "All the Leaves are Brown",
        sub: "Tempest Brewing Company",
        text: "Brown Ale - American"
    }
    
];

const addBeer = (beer, index)=> {
    return (
    `<div class="card">
        <div class="number">${index+1}</div>
        <div class="inner"> 
            <div class="title">${beer.title}</div>
            <div class="sub">${beer.sub}</div>
            <div class="text">${beer.text}</div>
        </div>
        <button class="detailsButton">
            details
            <span class="material-icons">
            arrow_forward
            </span>
        </button>
    </div>`)
}

window.addEventListener("load", function (){

    //document.getElementById("beers").insertAdjacentHTML("afterbegin", beers.map((beer, index) => addBeer(beer, index)));

    beers.map((beer, index) => {
        document.getElementById("container").insertAdjacentHTML("beforeend", addBeer(beer, index));
    })

});