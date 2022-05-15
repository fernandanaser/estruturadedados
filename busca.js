/*BUSCA SEQUENCIAL - para poucos elementos
    a partir de um conjunto de valores, encontrar qual posição está determinado valor
    ou retorna posição inválida (ex. -1)
*/
/*BUSCA BINÁRIA
  eficiente, pré requisito: os valores devem estar ordenados
  criar modelos para: reduzir o espectro de busca na metade
    -- acha o meio, se é o valor buscado ok
	 se não, vê se o buscado é maior ou menor que este do meio
       procura dele pra frente ou pra trás
	 e assim vai deslocando o inicio e fim por metades até achar, ou cruzar
*/

var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

//buscar o num dentro do vetor, e retornar a posição dele
//ou retornar -1 para um numero inválido
function busca(num) {
    for (i = 0; i < 6; i++) { //percorrer o vetor
        if (num == valores[i]) { //se num é igual valores na posição i, retorna a posição i
            return i;
        }
    }
    return -1; //se esgotou as buscas retorna -1
}

function buscaBin(num) {
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2); //definindo meio
        passos = passos + 1; //contar quantos passos (encontrar valor do meio)
        if (num == valores[meio]) { //se o numero buscado é valores na posição meio
            console.log("Achei em "+passos+" passos");
            return meio; //achou, retorna ele
        } else {
            if (num > valores[meio]) { // se numero buscado é maior que valores na posição meio
                inicio = meio + 1; //inicio vale meio + 1, fim permanece
            } else {
                fim = meio - 1; //senao, inicio permanece e fim vale meio -1
            }
        }
    }
    console.log("Não achei em " + passos + " passos")
    return -1;
}


//usando a ferramenta de busca
// console.log(busca(10));
// console.log(busca(50));

console.log(buscaBin(10));
console.log(buscaBin(50));
console.log(buscaBin(60));