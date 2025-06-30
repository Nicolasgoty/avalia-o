function cadastro() {
    let n1 = window.prompt("Digite o nome do time")
    let n2 = window.prompt("digite o nome do 1°jogador")
    let n3 = window.prompt("digite o nome do 2°jogador")
    let n4 = window.prompt("digite o nome do 3°jogador")
    let nota1 = Number (window.prompt("Digite a primeira idade"))
    let nota2 = Number (window.prompt("Digite a segunda idade"))
    let nota3 = Number (window.prompt("Digite a terceira idade"))

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é: ${media}</p>`;



    console.log(resultado);



    if(media <= 15){

        resultado.innerHTML = `<p>Seu time é passou com a média de idade de ${media.toFixed(1)}</p>`;

        console.log(resultado);
    
    }

     else {

        let dif = 15 - media;

        console.log(media = 15);

         resultado.innerHTML = `<p>Você não atingiu a média de idade, não passaram por ${dif.toFixed(1)} ano</p>`;

    }
}