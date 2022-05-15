/*PILHAS
  conjuntos: vetores, arrays
  empilhar valores, colocar na última posição
  retira na ordem inversa
  tipo de dado abstrato
  operação push, colocar dado
  pop retirar dado
  last in first out
  */

var elementos = []; //vetores
var topo = -1; //para saber se está fora da pilha, pois começa na posição 0
const MAX = 10; //tamanho máximo da pilha

//fazer o empilhamento de elementos
function push(num){
    if (topo < MAX){ //verificar se a pilha já chegou no limite
        topo = topo + 1 //topo foi para a primeira posição
        elementos[topo] = num; // elementos na posição correspondente ao topo recebem o número
    } else {
        console.log("Pilha está cheia");
    }

}

//perguntar se a pilha está vazia ou não
function estaVazia(){
    return topo == -1; //retorna esta função se topo é -1(vazio)
}

//retirar elementos da pilha
function pop(){
    if(topo != -1){ //se topo é diferente de -1, ou seja, não está vazio
        let num = elementos[topo]; //num recebe elementos na posição correspondente ao topo
        topo = topo -1; // diminui a posição do topo
        return num; //retorna num
    } else {
        console.log("Pilha está vazia");
    }
}

//----- parte do código que usa a pilha ----//

//inserir na ordem
// push(10);
// push(20);
// push(30);

// console.log(elementos);

//retirar elementos, ordem inversa
// console.log(pop());
// console.log(pop());
// console.log(pop());

/* demonstração: decimais convertidos para binário
10 / 2
 0   5 / 2
     1   2 / 2
         0   1 / 2
             1   0 *finaliza quando o resultado da divisão é 0. Armazena os restos numa pilha

            conversão: 10 = 01010 *pega todos os restos e exibe em ordem inversa
*/

var numDecimal = 10;
var resto;

console.log("Hora de empilhar")
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2); //armazenando na var resto, parseInt para forçar que permaneça numero iteiro
    push(resto); //adiciona o resto
    console.log(resto)
    numDecimal = parseInt(numDecimal / 2); // aqui numDecimal é ele / 2, forçando ser inteiro
}

//depois de fazer todas dvisões sucessivas
//percorrer a pilha, enquanto ela não for vazia retira cada numero
console.log("Desempilhando tudo")
while(!estaVazia()) { // enquanto não vazia
    console.log(pop()) //retira
}