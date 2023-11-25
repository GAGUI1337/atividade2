function imprimirMatrizETransposta(matriz) {
    console.log("Matriz A:");
    imprimirMatriz(matriz);
  
    console.log("Transposta da Matriz A:");
    const transposta = calcularTransposta(matriz);
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function calcularTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    let transposta = [];

    for (let i = 0; i < colunas; i++) {
        transposta[i] = [];
        for (let j = 0; j < linhas; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }

    return transposta;
}

const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

imprimirMatrizETransposta(matrizA);