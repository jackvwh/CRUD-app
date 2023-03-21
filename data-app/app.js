"use strict";

const exeggcutes = {    
    name: "Exeggcute",
    description: "Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
    ability: "Chloroform",
    image: "https://www.pokemon.com/us/pokedex/exeggcute",
    footprint: "https://www.pokemon.com/us/pokedex/exeggcute",
    dexindex: "#0103",
    type: "Grass, Psychic",
    subtype: "pre-chicken",
    weaknesses: "boiling water, foxes",
    gender: "binary they/them",
    weight: "fatty",
    height: "egg height",
    generation: "boomer",
    spilversion: "7",
    canEvolve: "Grower. not a shower",
    statsHP: "immortal",
    statsAttack: "strong milk",
    statsDefence: "farts alot",
    statsSpecialAttack: "tal",
    statsSpecialDefence: "tal",
    statsSpeed: "fast"}

function addPokemon(pokemon){

    const myHTML = /*HTML*/ `
    <li>Name: ${pokemon.name}</li>
    <li>Description: ${pokemon.description}</li>
    <li>Ability: ${pokemon.ability}</li>
    <li>${pokemon.image}</li>
    <li>${pokemon.footprint}</li>
    <li>DexIndex: ${pokemon.dexindex}</li>
    <li>SubType: ${pokemon.subtype}</li>
    <li>Weaknesses: ${pokemon.weaknesses}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight: ${pokemon.weight}</li>
    <li>Height: ${pokemon.height}</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Spil Version: ${pokemon.spilversion}</li>
    <li>Can Evolve: ${pokemon.canEvolve}</li>
    <li>Stat HP: ${pokemon.statsHP}</li>
    <li>Stats Attack: ${pokemon.statsAttack}</li>
    <li>Stats Defence: ${pokemon.statsDefence}</li>
    <li>Stats Special Attack: ${pokemon.statsSpecialAttack}</li>
    <li>Stats Special Defence: ${pokemon.statsSpecialDefence}</li>
    <li>Stats Speed: ${pokemon.statsSpeed}</li>
    `;
    document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
  
}
function showPokemon(pokemon) {
  const myHTML = /*HTML*/ `
    <p>Name: <span> ${pokemon.name}</span></p>
    <p>Description: <span>${pokemon.description}</span></p>
    <p>Abispanty: <span>${pokemon.abispanty}</span></p>
    <p><span>${pokemon.image}</span></p>
    <p><span>${pokemon.footprint}</span></p>
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
    `;
  document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
}

showPokemon(exeggcutes);
addPokemon(exeggcutes)