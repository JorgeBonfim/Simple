/* 3 notas e obter a média
média menor que 5, reprovado
média entre 5 e 7, recuperação
média acima de 7, aprovado*/


let nota1 = 9;
let nota2 = 1;
let nota3 = 1;

let media = (nota1+nota2+nota3)/3;
console.log(media)

if (media<5) {
    console.log('Reprovado')
}else if (media>=5 && media <=7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}
