function salvar() {
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var endereco = document.getElementById("endereço");
    var bairro = document.getElementById("bairro");
    var municipio = document.getElementById("Município");
    var password = document.getElementById("password");
    var passconfirmation = document.getElementById("passconfirmation");
   // validação de dados //
    
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
      }
    if (nome.value == "") {
      alert("Nome não informado");
  
      nome.focus();
  
      return;
    }
    if (cpf.value == "") {
        alert("CPF/CNPJ não informado");
        cpf.focus();
        return;
      }
      if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
      }
    if (endereco.value == "") {
      alert("Endereço não informado");
      endereco.focus();
      return;
    }
    if (bairro.value == "") {
      alert("Bairro não informado");
      bairro.focus();
      return;
    }
    if (municipio.value == "") {
      alert("Município não informado");
      municipio.focus();
      return;
    }
    if (password.value == "") {
        alert("Senha não informada");
        password.focus();
        return;
      }
      if (passconfirmation.value != password.value) {
        alert("Senhas diferentes");
        passconfirmation.focus();
        return;
      } 
      else{
        //salvando dados no localStorage//
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var cpf= document.getElementById("cpf").value;
    var telefone= document.getElementById("telefone").value;
    var endereco= document.getElementById("endereço").value;
    var bairro= document.getElementById("bairro").value;
    var municipio= document.getElementById("Município").value;
    var password= document.getElementById("password").value;
    var usuario = new Object();
    usuario.nome=nome;
    usuario.email=email;
    usuario.cpf=cpf;
    usuario.telefone=telefone;
    usuario.endereco=endereco;
    usuario.bairro=bairro;
    usuario.municipio=municipio;
    usuario.password=password;
    var jm = JSON.stringify(usuario);
    var ls = window.localStorage;
    ls.setItem("usuarios", jm);
    localStorage.setItem("acesso",true);
     //redirecionamento para tela de impostos//
setTimeout(()=>{
  window.location.href = 'inicio.html'
}, 1000) 
}
}
//tela login//
function logar(){
  var email= document.getElementById("email");
  var password = document.getElementById("password");
  var jsonUsuarios = window.localStorage.getItem('usuarios');
  var usuarios = JSON.parse(jsonUsuarios);

  if (email.value == usuarios.email && password.value == usuarios.password){
      localStorage.setItem("acesso",true);
    window.location.href = "inicio.html";
  }else {
    alert("Usuario não encontrado")
  }

}
function cadastro(){
  window.location.href = "cadastro.html";
}
//tela esqueceu a senha?//
function mostrarSenha(){
  var password = document.getElementById("mostrarSenha");
  var email= document.getElementById("email");
  var nome = document.getElementById("nome");
  var jsonUsuarios = window.localStorage.getItem('usuarios');
  var usuarios = JSON.parse(jsonUsuarios);
  
  
  if (email.value == usuarios.email && nome.value == usuarios.nome){
    password.style.display = "block";
    password.innerHTML = usuarios.password;

  }else {
    alert("Dados não encontrados");
  }
}
function voltar(){
  window.location.href = "login.html";
}
