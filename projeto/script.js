let slidetElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePssword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset =
  "'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$.-*&¨/?;:,'";
let novaSenha = '';

sizePssword.innerHTML = slidetElement.value;

slidetElement.oninput = function () {
  sizePssword.innerHTML = this.value;
};

function generatePassword() {
  let pass = '';
  for (let i = 0, n = charset.length; i < slidetElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove('hider');
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert('senha Copiada Com Sucesso!');
  navigator.clipboard.writeText(novaSenha);
}
