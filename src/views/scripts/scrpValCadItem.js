//import Cadastro from './cadastros.js';

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  nameValidate();
  cateValidade();
  descValidate();
  valValidate();
  imgValidate();

  let isValid = true;
  for(let i = 0; i < campos.length; i++){
    if(campos[i].style.border == '2px solid #e63636'){
      isValid = false;
      break;
    }
  }

  if(isValid){
    const cadastro = new Cadastro();
    const dados = {
      nome: campos[0].value,
      email: campos[1].value,
      senha: campos[2].value,
    };
    cadastro.salvarDados(dados);
  }
});

function setError(index){
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate(){
  if (campos[0].value.length < 5){
    setError(0);
  }
  else{
    removError(0);
  }
}

function cateValidade(){
  console.log(campos[1].value)
  if (campos[1].value == ""){
    setError(1);
  }
  else{
    removError(1);
  }
}

function descValidate(){
  if (campos[2].value.length < 10){
    setError(2);
  }
  else{
    removError(2);
  }
}

function valValidate(){
  console.log(campos[3].value)
  if (campos[3].value == ""){
    setError(3);
  }
  else{
    removError(3);
  }
}

function imgValidate(){
  console.log(campos[4].value)
  if (campos[4].value == ""){
    setError(4);
  }
  else{
    removError(4);
  }
}

