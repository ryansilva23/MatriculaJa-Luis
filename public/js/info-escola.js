import { investments } from './escolas.js'; //

//const response = await fetch('http://localhost:3000/dados'); //

//const investments = await response.json(); //

const cards = document.querySelector('.cards');
const mapalink = document.getElementById("mapalink")
const foto_escola = document.getElementById("foto_escola")


document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const escolaId = urlParams.get('id')
  
console.log(escolaId)
console.log(investments)
const view = `
    <button class="nav-link" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#produto" escola_num="${escolaId}" type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false">
                  <h3 class='' style="font-size: 2em;">INFORMAÇÕES</h3>
                  <div style="line-height: 1.6">
                  <span style="font-size: 0.9em;">${investments[escolaId].endereco}</span>
                  <span style="font-size: 0.9em;">${investments[escolaId].telefone}</span>
                  <span style="font-size: 0.9em;">${investments[escolaId].anos}</span>
                  <span style="font-size: 0.9em;">${investments[escolaId].horários}</span>
                  </div></button>
    <button class="nav-link" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#mapa" escola_num="${escolaId}" type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false">
      <h3 class='' style="font-size: 2em;">MAPA</h3>
      <div style="line-height: 1.6">
      <span style="font-size: 0.9em;">${investments[escolaId].endereco}</span>
      </div></button>
                  `


cards.insertAdjacentHTML('beforeend', view);

mapalink.src = `${investments[escolaId].mapa}`
foto_escola.src = `../images/Escolas/${investments[escolaId].foto}`

const titulo = document.getElementById('título')
titulo.innerHTML = `${investments[escolaId].nome}`})