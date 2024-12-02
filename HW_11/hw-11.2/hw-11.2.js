let divRecipe = document.getElementById('recipe');

let url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

fetch(url)
    .then(res => res.json())
    .then((infoRecipes) => {
        const {recipes} = infoRecipes;

        for (const recipe of recipes) {
            console.log(recipes);
            let div = document.createElement('div');
            for (const recipeElement in recipe) {
                if (Array.isArray(recipe[recipeElement])) {
                    let divTitleUl = document.createElement('div');
                    let title = document.createElement('p');
                    title.innerText = `${recipeElement}`;
                    let ul = document.createElement('ul');
                    let array = recipe[recipeElement];
                    for (const arrayElement of array) {
                        let li = document.createElement('li');
                        li.innerText = arrayElement;
                        ul.appendChild(li);
                    }
                    divTitleUl.appendChild(title);
                    divTitleUl.appendChild(ul);
                    div.appendChild(divTitleUl);
                } else {
                    if (recipeElement !== 'image') {
                let pRecipe = document.createElement('p');
                pRecipe.innerText = `${recipeElement}: ${recipe[recipeElement]}`
                div.appendChild(pRecipe);
                    }
                }
            }
            let img = document.createElement('img');
            img.src = recipe.image;
            div.appendChild(img);
            divRecipe.appendChild(div);
        }
    });

















