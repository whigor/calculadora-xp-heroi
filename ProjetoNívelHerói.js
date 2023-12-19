console.log ("Seja Bem vindo(a) à calculadora de Xp de herói!");
console.log ("---------------------------------------------------");
var nomeheroi = prompt("Digite o nome do herói: ");
console.log ("---------------------------------------------------");
var xp = prompt("Digite o XP: ");
console.log ("----------------------------------------------------");
var nivel

if (xp > 0 && xp <= 1000) {
  nivel = "Ferro. Sua jornada ainda esta começando!";
}else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze. Você está ficando mais forte!";
}else if (xp >= 2001 && xp <= 6000) {
  nivel = "Prata. Um herói reluzente!";
}else if (xp >= 6001 && xp <= 7000) {
  nivel = "Ouro. Parabéns!!";
}else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina. Ascenda!!";
}else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente. Parabéns! Mas pode ficar ainda mas forte!";
}else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal. Quando poder!!";
}else if (xp >= 10001) {
  nivel = "Radiante. Não há mais limites para você!!";
}

console.log ("O Herói " +nomeheroi + " está no nível de " +nivel)
console.log ("--------------------------------------")
console.log("Obrigado por usar a calculadora de Xp!!")