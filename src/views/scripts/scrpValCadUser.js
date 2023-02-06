const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

let message = "";
let type = "";



form.addEventListener('submit',(event)=>{
  spans[8].style.display = 'none';
  event.preventDefault();
  nameValidate();
  emailValidate();
  telValidate();
  cidadeValidate();
  estadoValidate();
  mainPasswValidate();
  comparePassw();
  termos();

  let isValid = true;
  for (let i = 0; i < campos.length; i++) {
    let campo = campos[i].style.border
    console.log(campo)
    if ( campo == '2px solid rgb(230, 54, 54)') {
      
      isValid = false;
      break;
    }
  }
console.log(isValid);
  // se todos os dados estiverem corretos
  if (isValid) {
    // dados a serem enviados
    const dados = {
      name: campos[0].value,
      email: campos[1].value,
      number: campos[2].value,
      city: campos[3].value,
      state: campos[4].value,
      password: campos[5].value
    };
    //console.log(dados);
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(res => {
      if (res.status === 201) {
        message = ("Usuário Criado com Sucesso!");
        type = "success";
        console.log(message);
        window.location.href = '/Home';

      } else if (res.status === 400 || 500) {
        message = ("ERRO ao Criar o Usuário!");
        type = "danger"
        console.log(message);
        spans[8].style.display = 'block';
        //window.location.href = '/CadUser';
      }
    })
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

function emailValidate(){
  if (emailRegex.test(campos[1].value)){
    removError(1);
  }
  else{
    setError(1);
  }
}

function telValidate(){
  if (campos[2].value.length < 11){
    setError(2);
  }
  else{
    removError(2);
  }
}

function cidadeValidate(){
  if (campos[3].value.length < 3){
    setError(3);
  }
  else{
    removError(3);
  }
}

function estadoValidate(){
  if (campos[4].value.length === 2){
    removError(4);
  }
  else{
    setError(4);
  }
}

function mainPasswValidate(){
  if (campos[5].value.length < 8){
    setError(5);
  }
  else{
    removError(5);
    comparePassw();
  }
}

function comparePassw(){
  if(campos[5].value == campos[6].value && campos[6].value.length>=8){
    removError(6);
  }
  else{
    setError(6);
  }
}

function termos(){
  if (campos[7].checked){
    removError(7);
  }
  else{
    setError(7);
  }
}
