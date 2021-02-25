//-----Introdução ao JavaScript-----
// var nome = "Gabriel Christo";
// var idade = 31;
// var frase = "Japão é o melhor time do mundo!"
// alert(nome + " tem " + idade + " anos");
// console.log(nome);
// console.log(idade);
// console.log(frase.replace("Japão", "Brasil"));

//-----Array e Dicionario-----

// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista[2]);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "));

//dicionario
// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta.nome);

// var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
// console.log(frutas);
// console.log(frutas[1].nome);

//-----Condicionais, laços de repetição e Date-----

// var idade = prompt("Qual sua idade");
// if(idade >= 18){
//     console.log("Maior de idade!");
// }else{
//     console.log("Menor de idade!");
// };

// var count = 0;
// while(count < 5){
//     console.log(count);
//     count++;
// };

// var count;
// for(count = 0; count < 5; count++){
//     console.log(count);
// };

// var d = new Date();
// console.log(d);
// console.log(d.getMonth()+1); //no caso do mes sempre adicionar 1
// console.log(d.getMinutes());


// -----Desenvolva páginas web com JavaScript-----

// function soma(n1, n2){
//     return n1 + n2;
// }
// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }
// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Digite sua idade: ");

// console.log(soma(5, 10));
// console.log(setReplace("Vai Japão", "Japão", "Brasil"));
// console.log(validaIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    // alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://github.com/GMChristo"); //nova aba
    // window.location.href = "https://github.com/GMChristo"; //msm aba
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse!";
    // document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse!";
    // alert("trocar texto");
}

function voltar(element){
    element.innerHTML = "Passe o mouse aqui!";
    document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}