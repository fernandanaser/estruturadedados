/*ALGORITMOS DE ORDENAÇÃO
BUBBLE SORT
  dado um conjunto de valores, pega o primeiro valor em relação ao próximo
  se o valor comparado é maior que o próximo, troca
  passa a comparar com o próximo e assim vai
  valores pesados no fundo, valores leves na ponta
  - não é muito eficiente
  - se inserir um novo valor deve reordenar para nova busca
  */

var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
    let inicio = 0; //posição 0
    let fim = 8; //posição 9
    let tmp; //algoritmo para trocar

    for (vezes = 0; vezes < 8; vezes++) { // fazer isso 8 vezes (tamanho do array)
        //comparar o elemento com o próximo
        for (pos = inicio; pos < fim - 1 - vezes; pos++) { //posição começando no inicio, até chegar no penúltimo valor, tirando vezes
            if (valores[pos] > valores[pos + 1]) { //se valor na posição é maior que o próximo
                //trocar
                tmp = valores[pos] //tmp recebe valor atual
                valores[pos] = valores[pos + 1]; //valor atual recebe o próximo
                valores[pos + 1] = tmp; //o próximo recebe tmp
            }

        }
    }
}

ordena();
console.log("Valor ordenado...");
console.log(valores);