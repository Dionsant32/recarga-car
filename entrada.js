var logado = false;

if (localStorage.getItem("acesso") != "true"){
    alert("Você não está autenticado!");
    window.location.href = "login.html";
}
//tela inicio //
function entrada(){
  window.location.href = "entrada.html"
}
function geracao(){
  window.location.href = "geração.html"
}
//tela inicio //
function entrada(){
  window.location.href = "entrada.html"
}
function geracao(){
  window.location.href = "geração.html"
}
//tela entrada//
function gravar() {
  var venda = window.localStorage.getItem("venda");
  var imposto = document.getElementById("imposto");
  var despFixas = document.getElementById("despFixas");
  var despVariaveis = document.getElementById("despVariaveis");
  var estVenda = document.getElementById("estVenda");
  var investimento = document.getElementById("investimento");
  var custo = document.getElementById("kwh");
   // validação de dados //
    
    if (imposto.value == "") {
        alert("Imposto não informado");
        imposto.focus();
        return;
      }
    if (despFixas.value == "") {
      alert("Despesas fixas não informadas");
      despFixas.focus();
      return;
    }
    if (despVariaveis.value == "") {
        alert("Despesas variáveis não informada");
        despVariaveis.focus();
        return;
      }
      if (estVenda.value == "") {
        alert("Estimativa de venda não informada");
        estVenda.focus();
        return;
      }
    if (investimento.value == "") {
      alert("Investimentos não informados");
      investimento.focus();
      return;
    }
    if (custo.value == "") {
      alert("Custo Kwh não informado");
      custo.focus();
      return;
    }
      //salvando dados no localStorage//
  else {
  var imposto = document.getElementById("imposto").value;
  var despFixas = document.getElementById("despFixas").value;
  var despVariaveis = document.getElementById("despVariaveis").value;
  var estVenda = document.getElementById("estVenda").value;
  var investimento = document.getElementById("investimento").value;
  var custo = document.getElementById("kwh").value;
  var entrada = new Object();
  entrada.imposto = parseFloat(imposto);
  entrada.despFixas = parseFloat(despFixas);
  entrada.despVariaveis = parseFloat(despVariaveis);
  entrada.estVenda = parseFloat(estVenda);
  entrada.investimento = parseFloat(investimento);
  entrada.custo = parseFloat(custo);
  var jm = JSON.stringify(entrada);
  var ls = window.localStorage;
  ls.setItem("entrada", jm);
  //removendo preços e margens de outros valores, se existirem//
  if(localStorage.venda != []){
    localStorage.removeItem('venda')
  }

  window.location.href = "geração.html"
}
}
function inicio(){
  window.location.href = "inicio.html"
}
//tela geração//
function calcular(){
  var margem = document.getElementById("margem").value;

    //cálculo//
    if (margem != ""){
    var jsonEntrada = window.localStorage.getItem("entrada");
    var entrada = JSON.parse(jsonEntrada);
    var calculo = (((Number(entrada.investimento) + Number(entrada.despFixas)) / Number(entrada.estVenda)) + Number(entrada.custo))/
    ( 1 - ((Number(entrada.imposto) + Number(entrada.despVariaveis) + Number(parseFloat(margem)))) / 100)
    
if (calculo < 0){
  alert("Preço negativo")
}else{
    //salvando no localStorage//
    var vd = {margem, calculo };
    if (localStorage.getItem('venda') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('venda', JSON.stringify([vd]));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'venda',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('venda')),
          vd 
        ])
      );
    }
          
    //mostrando o preço de venda//
    document.getElementById("preço").innerHTML = calculo
  
  //inserindo margem e preço na tabela//
    if(localStorage.venda != []){
    var jsonVenda = window.localStorage.getItem("venda");
    var venda = JSON.parse(jsonVenda);
    valores = document.getElementById("tbPreços");    
    var qtdlLinhas = valores.rows.length;
    var linha = valores.insertRow(qtdlLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellMargem = linha.insertCell(1);
    var cellCalculo = linha.insertCell(2);
  
    cellCodigo.innerHTML = qtdlLinhas;
    cellMargem.innerHTML = margem;
    cellCalculo.innerHTML = calculo;
  }
}
}else{
  alert("Digite a margem desejada")
}
}
