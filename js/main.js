//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){

    let drink = document.querySelector('input').value.toLowerCase()

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {

        let ingredients = [data.drinks[0].strIngredient1,data.drinks[0].strIngredient2,data.drinks[0].strIngredient3,data.drinks[0].strIngredient4,data.drinks[0].strIngredient5,data.drinks[0].strIngredient6,data.drinks[0].strIngredient7,data.drinks[0].strIngredient8,data.drinks[0].strIngredient9,data.drinks[0].strIngredient10,data.drinks[0].strIngredient11,data.drinks[0].strIngredient12,data.drinks[0].strIngredient13,data.drinks[0].strIngredient14,data.drinks[0].strIngredient15]

        let actualIngredients = []

        ingredients.forEach (x => {if(x !== null){actualIngredients.push(x)};})

        console.log(actualIngredients);

        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('img').style.padding = '10px'
        document.querySelector('#ingredient').innerText = actualIngredients.join(', ')
        document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
        console.log(data.drinks);
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    

}

