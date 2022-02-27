const toggleSpinner = prop => {
    document.getElementById('spinner').style.display = prop;
}

const getMeals = () => {
    document.getElementById('meals').textContent = '';
    toggleSpinner('block');
    const item = document.getElementById('search-meal').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(resp => resp.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = (meals) => {
    const container = document.getElementById('meals');
    if (meals) {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-sm-10', 'col-md-4', 'col-lg-3', 'my-3');
            div.innerHTML = `
            <div class="card">
            <img src=${meal.strMealThumb} class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                    <a href=${meal.strYoutube} target="_blank" class="btn btn-sm btn-primary">see video</a>
                </div>
            </div>
            `;
            container.appendChild(div);

        });
        toggleSpinner('none');
    } else {
        container.innerHTML = `<div class="alert alert-danger" role="alert">
        No Search Result Found !!
      </div>`;
        toggleSpinner('none');
    }


}