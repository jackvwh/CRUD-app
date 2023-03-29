"use strict";
// git@github.com:jackvwh/Pokemon-data-app.git
// https://raw.githubusercontent.com/jackvwh/CRUD-app/master/json-data.json

https: window.addEventListener("load", initApp);

async function initApp(){
    const pokeList = await getPokemons("https://raw.githubusercontent.com/cederdorff/dat-js/main/05-data/pokemons.json");
    pokeList.forEach(showPokemon);
    // for (let i = 0; i <= pokeList.length; i++) {
    //   showPokemon(pokeList[i]);
    // }
}
function showPokemon(pokemon) {
      const myHTML = /*HTML*/ `
      <article class="grid-item">
        <img src="${pokemon.image}"></img>
        <h2>Name: <span> ${pokemon.name}</span></h2>
          <section>
              <ul>
                <li>Ability: <span>${pokemon.ability}</span></li>
                <li>DexIndex: <span>${pokemon.dexindex}</span></li>
                <li>SubType: <span>${pokemon.subtype}</span></li>
                <li>Weaknesses: <span>${pokemon.weaknesses}</span></li>
                <li>Gender: <span>${pokemon.gender}</span></li>
                <li>Generation: <span>${pokemon.generation}</span></li>
                <li>Can Evolve: <span>${pokemon.canEvolve}</span></li>
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
  document.querySelector("#dialog-dexIndex").textContent = `${pokemon.dexindex}`;
  document.querySelector("#dialog-subType").textContent = `${pokemon.subType}`;
  document.querySelector("#dialog-weaknesses").textContent = `${pokemon.weaknesses}`;
  document.querySelector("#dialog-gender").textContent = `${pokemon.gender}`;
  document.querySelector("#dialog-weight").textContent = `${pokemon.weight}`;
  document.querySelector("#dialog-height").textContent = `${pokemon.height}`;
  document.querySelector("#dialog-generation").textContent = `${pokemon.generation}`;
  document.querySelector("#dialog-gameVersion").textContent = `${pokemon.gameVersion}`;
  document.querySelector("#dialog-evolve").textContent = `${pokemon.canEvolve}`;
  document.querySelector("#dialog-HP").textContent = `${pokemon.statsHP}`;
  document.querySelector("#dialog-attack").textContent = `${pokemon.statsAttack}`;
  document.querySelector("#dialog-defence").textContent = `${pokemon.statsDefence}`;
  document.querySelector("#dialog-specialAttack").textContent = `${pokemon.statsSpecialAttack}`
  document.querySelector("#dialog-specialDefence").textContent = `${pokemon.statsSpecialDefence}`
  document.querySelector("#dialog-speed").textContent = `${pokemon.statsSpeed}`;
}
async function getPokemons(url){
  const response = await fetch(`${url}`);
  const pokemon = await response.json();
  return pokemon;
}

