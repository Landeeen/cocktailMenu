//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`)
    })