"use strict";

https: window.addEventListener("load", initApp);


async function initApp(){
    const poke = await getPokemons("https://raw.githubusercontent.com/jackvwh/CRUD-app/master/json-data.json");
    console.log(poke);
    showPokemon(poke);
}
// const exeggcutes = {
//   name: "Exeggcute",
//   description:
//     "Though it may look like its just a bunch of eggs, its a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
//   ability: "Chloroform",
//   image: "images/exeggcutes.png",
//   footprint: "images/exeggcutes.png",
//   dexindex: "#0103",
//   type: "Grass, Psychic",
//   subtype: "pre-chicken, rooster seemen",
//   weaknesses: "boiling water, bacon, foxes",
//   gender: "binary they/them",
//   weight: "fatty",
//   height: "egg height",
//   generation: "boomer",
//   spilversion: "first version",
//   canEvolve: "Grower. not a shower",
//   statsHP: "immortal",
//   statsAttack: "high",
//   statsDefence: "smell like fart",
//   statsSpecialAttack: "tal",
//   statsSpecialDefence: "tal",
//   statsSpeed: "fast",
// };
// function addPokemon(pokemon){
//   const myHTML = /*HTML*/ `
//   <li>Name: ${pokemon.name}</li>
//   <li>Description: ${pokemon.description}</li>
//   <li>Ability: ${pokemon.ability}</li>
//   <li>${pokemon.image}</li>
//   <li>${pokemon.footprint}</li>
//   <li>DexIndex: ${pokemon.dexindex}</li>
//   <li>SubType: ${pokemon.subtype}</li>
//   <li>Weaknesses: ${pokemon.weaknesses}</li>
//   <li>Gender: ${pokemon.gender}</li>
//   <li>Weight: ${pokemon.weight}</li>
//   <li>Height: ${pokemon.height}</li>
//   <li>Generation: ${pokemon.generation}</li>
//   <li>Spil Version: ${pokemon.spilversion}</li>
//   <li>Can Evolve: ${pokemon.canEvolve}</li>
//   <li>Stat HP: ${pokemon.statsHP}</li>
//   <li>Stats Attack: ${pokemon.statsAttack}</li>
//   <li>Stats Defence: ${pokemon.statsDefence}</li>
//   <li>Stats Special Attack: ${pokemon.statsSpecialAttack}</li>
//   <li>Stats Special Defence: ${pokemon.statsSpecialDefence}</li>
//   <li>Stats Speed: ${pokemon.statsSpeed}</li>
//   `;
//   document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
// }
function showPokemon(pokemon) {
  const myHTML = /*HTML*/ `
  <article >
    <p>Name: <span> ${pokemon.name}</span></p>
    <p>Description: <span>${pokemon.description}</span></p>
    <p>Ability: <span>${pokemon.ability}</span></p>
    <img src="${pokemon.image}"></img>
    <img src="${pokemon.footprint}"></img>
    <p>DexIndex: <span>${pokemon.dexindex}</span></p>
    <p>SubType: <span>${pokemon.subtype}</span></p>
    <p>Weaknesses: <span>${pokemon.weaknesses}</span></p>
    <p>Gender: <span>${pokemon.gender}</span></p>
    <p>Weight: <span>${pokemon.weight}</span></p>
    <p>Height: <span>${pokemon.height}</span></p>
    <p>Generation: <span>${pokemon.generation}</span></p>
    <p>Spil Version: <span>${pokemon.spilversion}</span></p>
    <p>Can Evolve: <span>${pokemon.canEvolve}</span></p>
    <p>Stat HP: <span>${pokemon.statsHP}</span></p>
    <p>Stats Attack: <span>${pokemon.statsAttack}</span></p>
    <p>Stats Defence: <span>${pokemon.statsDefence}</span></p>
    <p>Stats Special Attack: <span>${pokemon.statsSpecialAttack}</span></p>
    <p>Stats Special Defence: <span>${pokemon.statsSpecialDefence}</span></p>
    <p>Stats Speed: <span>${pokemon.statsSpeed}</span></p>  
    </article>
    `;
  document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked(){
    const character = this;
    const myHTML = /*HTML*/ `
        <article >
          <p>Name: <span> ${pokemon.name}</span></p>
          <p>Description: <span>${pokemon.description}</span></p>
          <p>Ability: <span>${pokemon.ability}</span></p>
          <img src="${pokemon.image}"></img>
          <img src="${pokemon.footprint}"></img>
          <p>DexIndex: <span>${pokemon.dexindex}</span></p>
          <p>SubType: <span>${pokemon.subtype}</span></p>
          <p>Weaknesses: <span>${pokemon.weaknesses}</span></p>
          <p>Gender: <span>${pokemon.gender}</span></p>
          <p>Weight: <span>${pokemon.weight}</span></p>
          <p>Height: <span>${pokemon.height}</span></p>
          <p>Generation: <span>${pokemon.generation}</span></p>
          <p>Spil Version: <span>${pokemon.spilversion}</span></p>
          <p>Can Evolve: <span>${pokemon.canEvolve}</span></p>
          <p>Stat HP: <span>${pokemon.statsHP}</span></p>
          <p>Stats Attack: <span>${pokemon.statsAttack}</span></p>
          <p>Stats Defence: <span>${pokemon.statsDefence}</span></p>
          <p>Stats Special Attack: <span>${pokemon.statsSpecialAttack}</span></p>
          <p>Stats Special Defence: <span>${pokemon.statsSpecialDefence}</span><p>
          <p>Stats Speed: <span>${pokemon.statsSpeed}</span></p>  
        </article>
        `;
      document.querySelector("#dialog").showModal();
      document.querySelector("#dialog").insertAdjacentHTML("beforeend", myHTML);
    }
}

async function getPokemons(url){
  const response = await fetch(`${url}`);
  const pokemon = await response.json();
  return pokemon;
}

showPokemon(exeggcutes);  
showPokemon(exeggcutes);  
showPokemon(exeggcutes);  
