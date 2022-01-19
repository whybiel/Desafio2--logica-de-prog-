//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let age = 17
if(age >= 18){
    console.log("Parabéns, você pode acesssar este site")
}else{
    console.log("Que pena, você não pode acessar pois é de menor!")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = "true"
if(age >= 18 && humano == "true"){
    console.log("Você é um humano de maior")
}else{
    console.log("Você não pode acessar esse site")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversário ="Março"
if(aniversário == "Janeiro" || aniversário == "Dezembro"){
    console.log("Parabéns, você faz aniversário nesse mês!")
}else{
    console.log("Você faz aniversário em outro mês")
}

//*** Exercícios bônus

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Gabriel"
if( nome[0] == "R"){
    console.log("Seu nome começa com R!")
}else{
    console.log("Seu nome não começa com R!")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Ferreira"
if(sobrenome.length >= 6 || sobrenome.substring(0,1) == "E"){
    console.log("Você tem um sobrenome com 6 letras ou seu nome começa com E")
}else{
    console.log("Seu sobrenome tem menos de 6 letras e seu nome não começa com E")
}