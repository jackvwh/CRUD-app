"use strict";
// git@github.com:jackvwh/CRUD-app.git
// https://raw.githubusercontent.com/jackvwh/CRUD-app/master/json-data.json

/****** TO DO LIST  ******
 * sort recipes object array 
 * remove li elements from modal after modal close
 * 
*/

https: window.addEventListener("load", initApp);

async function initApp() {
  const recipeList = await getRecipes(
    "https://raw.githubusercontent.com/LakkenLak/p1-madplan/main/recipes.json"
  );
  console.log(recipeList);
    recipeList.sort();
    showRecipeTable(recipeList);

}
function showIngredient(ingredient, i) {
  const ingredients = /*HTML*/ `    
       <li>${i + 1}: <span>${ingredient}</span></li>
      `;
  document
    .querySelector("#recipes article:last-child")
    .insertAdjacentHTML("beforeend", ingredients);
  document;
}
function showIngredientModal(ingredient, i) {
  const ingredients = /*HTML*/ `    
       <li>${i + 1}: <span>${ingredient}</span></li>
      `;
  document
    .querySelector("#ingredientList")
    .insertAdjacentHTML("beforeend", ingredients);
  document;
}
function showRecipeModal(recipe) {
  document.querySelector("#dialog-name").textContent = `${recipe.name}`;
  document.querySelector("#dialog-url").href = `${recipe.url}`;
  for (let i = 0; i < recipe.ingredients.length; i++) {
    showIngredientModal(recipe.ingredients[i].name, i);
  }
  document.querySelector("#dialog").showModal();
}
async function getRecipes(url) {
  const response = await fetch(`${url}`);
  const recipes = await response.json();
  return recipes;
}
function showRecipeTable(recipeList) {
  recipeTableHead();
  // for (let i = 0; i <= poke.length; i++){
  //   addPokeRow(poke[i]);
  // }
  recipeList.forEach(addRecipeRow);
}
function recipeTableHead() {
  const myHTML = /*HTML*/ `
      <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
      </thead>
    `;
  document
    .querySelector("#recipe-table")
    .insertAdjacentHTML("beforeend", myHTML);
}
function addRecipeRow(recipeList) {
  const myHTML = /*HTML*/ `
    <tr>
        <td> ${recipeList.name} </td>
        <td><a href="${recipeList.url}"> ${recipeList.url} </a></td>
    </tr>
    `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("tbody tr:last-child").addEventListener("click", recipeClicked);

  function recipeClicked() {
    showRecipeModal(recipeList);
  }
}
function showRecipe(recipe) {
  const myHTML = /*HTML*/ `
      <article class="grid-item">
        <h2>Name: <span> ${recipe.name}</span></h2>
        <h5>Ingredienser:</h5>
      </article>
      `;
  document.querySelector("#recipes").insertAdjacentHTML("beforeend", myHTML);
  for (let i = 0; i < recipe.ingredients.length; i++) {
    showIngredient(recipe.ingredients[i].name, i);
  }
  document
    .querySelector("#recipes article:last-child")
    .addEventListener("click", recipeClicked);
  function recipeClicked() {
    showRecipeModal(recipe);
  }
}
