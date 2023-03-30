"use strict";

/****** TO DO LIST  ******
 * sort recipes array 
*/

https: window.addEventListener("load", initApp);

async function initApp() {
  const recipeList = await getRecipes(
    "https://raw.githubusercontent.com/LakkenLak/p1-madplan/main/recipes.json"
  );
    showRecipeTable(recipeList);
}
async function getRecipes(url) {
  const response = await fetch(`${url}`);
  const recipes = await response.json();
  return recipes;
}
function showRecipeTable(recipeList) {
  recipeTableHead();
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
function showRecipeModal(recipe) {
  document.querySelector("#dialog-name").textContent = `${recipe.name}`;
  document.querySelector("#dialog-url").href = `${recipe.url}`;
  //   loop to show ingredients in modal
  for (let i = 0; i < recipe.ingredients.length; i++) {
    showIngredientModal(recipe.ingredients[i].name, i);
  }
  document.querySelector("#dialog").showModal();
  document
    .querySelector("#closeModal")
    .addEventListener("click", clearModalList);
}
function clearModalList() {
  // HTML list length
  const listLength = document.querySelector("#ingredientList").children.length;
  // clear dialog list elements
  for (let i = 0; i < listLength; i++) {
    document.querySelector("#ingredientList li:last-child").remove();
  }
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
