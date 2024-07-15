//import { investments } from './escolas.js'; //

const response = await fetch('http://localhost:3000/dados'); //

const investments = await response.json();//

console.log(investments)

const cards = document.querySelector('.cards');

let x = 0

//function redirecionar(school){
//  sessionStorage.setItem("escola", school);
//  location.assign("../html/info-escola.html")
//}

for (const investment of investments) {
  const view = `
  <div class="col">
  <a href="http://localhost:3000/escola/?id=${investment.id}">
    <button id="${x}"
      class="nav-link" 
      id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#produto${x} type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false"
    >
    
        <h3 class='' style="font-size: 2em;">${investment.nome}</h3>
        <div style="line-height: 1.6">
        <span style="font-size: 0.9em;">${investment.endereco}</span>
        <span style="font-size: 0.9em;">${investment.telefone}</span>
        <span style="font-size: 0.9em;">${investment.anos}</span>
        <span style="font-size: 0.9em;">${investment.horários}</span>
        </div>
      </button>
      </a>
    <div>`;
  cards.insertAdjacentHTML('beforeend', view);
  let botao = document.getElementById(x);
  x++
 /* botao.addEventListener('click', function(){
    redirecionar(botao.id);
  })*/
}