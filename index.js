//Classificador de nível de Herói (Desafio do curso de Lógica de programação) por Wagner83dev em 13/04/2025.
//
//TAREFA: Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
//depois utilizar uma estrutura de decisão para apresentar uma mensagem com o nome e o nível do Herói.
//
let nomeHeroi = "Wagner"
let experiencia = 2500
let nivelHeroi = ""

if(experiencia <= 1000){
    nivelHeroi = "Ferro"
} else if(experiencia >= 1001 && experiencia <=2000){
    nivelHeroi = "Bronze"
} else if(experiencia >= 2001 && experiencia <=5000){
    nivelHeroi = "Prata"
} else if(experiencia >= 5001 && experiencia <=7000){
    nivelHeroi = "Ouro"
} else if(experiencia >= 7001 && experiencia <=8000){
    nivelHeroi = "Platina"
} else if(experiencia >= 8001 && experiencia <=9000){
    nivelHeroi = "Ascendente"
} else if(experiencia >= 9001 && experiencia <=10000){
    nivelHeroi = "Imortal"
} else{
    nivelHeroi = "Radiante"
}
console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi + "!")