"use strict";
// git@github.com:jackvwh/CRUD-app.git
// https://raw.githubusercontent.com/jackvwh/CRUD-app/master/json-data.json

https: window.addEventListener("load", initApp);

async function initApp(){
    const pokeList = await getPokemons("json-data.json");
    console.log(pokeList);
    let choice = prompt(`Write "a" for card style or "b" for table style?`);
    showStyle(choice, pokeList);
    
}
function showStyle(choice, poke){
    if (choice === "b") {
      showPokeTable(poke);  
    }
    else {
      for (let i = 0; i <= poke.length; i++) {
        showPokemon(poke[i]);
      }
    }
}
function showPokemon(pokemon) {
      const myHTML = /*HTML*/ `
      <article class="grid-item">
        <img src="${pokemon.image}"></img>
        <h2>Name: <span> ${pokemon.name}</span></h2>
        <h4>Description: <span>${pokemon.description}</span></h4>
          <section>
          <h4> Information </h4>
              <ul>
                <li>Ability: <span>${pokemon.ability}</span></li>
                <li>DexIndex: <span>${pokemon.dexindex}</span></li>
                <li>SubType: <span>${pokemon.subtype}</span></li>
                <li>Weaknesses: <span>${pokemon.weaknesses}</span></li>
                <li>Gender: <span>${pokemon.gender}</span></li>
                <li>Weight: <span>${pokemon.weight}</span></li>
                <li>Height: <span>${pokemon.height}</span></li>
                <li>Generation: <span>${pokemon.generation}</span></li>
                <li>Game Version: <span>${pokemon.spilversion}</span></li>
                <li>Can Evolve: <span>${pokemon.canEvolve}</span></li>
                <li>Stat HP: <span>${pokemon.statsHP}</span></li>
                <li>Stats Attack: <span>${pokemon.statsAttack}</span></li>
                <li>Stats Defence: <span>${pokemon.statsDefence}</span></li>
                <li>Stats Special Attack: <span>${pokemon.statsSpecialAttack}</span></li>
                <li>Stats Special Defence:<span>${pokemon.statsSpecialDefence}</span><li>
                <li>Stats Speed: <span>${pokemon.statsSpeed}</span></li>  
              </ul>
            </section>
      </article>
      `;
      document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
      document
        .querySelector("#pokemons article:last-child")
        .addEventListener("click", pokemonClicked);
  function pokemonClicked(){
      showPokeModal(pokemon);
    }
}
function showPokeModal(pokemon){
  document.querySelector("#dialog").showModal();
  document.querySelector("#dialog-image").src = `${pokemon.image}`
  document.querySelector("#dialog-name").textContent = `${pokemon.name}`
  document.querySelector("#dialog-description").textContent = `${pokemon.description}`
  document.querySelector("#dialog-ability").textContent = `${pokemon.ability}`;
  document.querySelector("#dialog-dexIndex").textContent = `${pokemon.dexIndex}`;
  document.querySelector("#dialog-subType").textContent = `${pokemon.subType}`;
  document.querySelector("#dialog-weaknesses").textContent = `${pokemon.weaknesses}`;
  document.querySelector("#dialog-gender").textContent = `${pokemon.gender}`;
  document.querySelector("#dialog-weight").textContent = `${pokemon.weight}`;
  document.querySelector("#dialog-height").textContent = `${pokemon.height}`;
  document.querySelector("#dialog-generation").textContent = `${pokemon.generation}`;
  document.querySelector("#dialog-gameVersion").textContent = `${pokemon.gameVersion}`;
  document.querySelector("#dialog-evolve").textContent = `${pokemon.evolve}`;
  document.querySelector("#dialog-attack").textContent = `${pokemon.attack}`;
  document.querySelector("#dialog-defence").textContent = `${pokemon.defence}`;
  document.querySelector("#dialog-specialAttack").textContent = `${pokemon.specialAttack}`
  document.querySelector("#dialog-specialDefence").textContent = `${pokemon.specialDefence}`
  document.querySelector("#dialog-speed").textContent = `${pokemon.speed}`;
  // document.querySelector("#dialog-footprint").src = `${pokemon.footprint}`;
}
async function getPokemons(url){
  const response = await fetch(`${url}`);
  const pokemon = await response.json();
  return pokemon;
}
function showPokeTable(poke){

    pokeTableHead();
    for (let i = 0; i <= poke.length; i++){
      addPokeRow(poke[i]);
    } 
    // poke.forEach(addPokeRow => {});
}
function pokeTableHead(){
  const myHTML = /*HTML*/ `
      <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Ability</th>
            <th>Gender</th>
            <th>Generation</th>
          </tr>
      </thead>
    `;
      document
        .querySelector("#poke-table")
        .insertAdjacentHTML("beforeend", myHTML);
}
function addPokeRow(poke) {
  const myHTML = /*HTML*/ `
      <tr>
          <td><img src="${poke.image}"></td>
          <td>${poke.name}</td>
          <td>${poke.ability}</td>
          <td>${poke.gender}</td>
          <td>${poke.generation}</td>
      </tr>
  `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", myHTML);
    document
      .querySelector("tbody tr:last-child")
      .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokeModal(poke);
  }

}

