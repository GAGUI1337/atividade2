function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        console.log("Não é possível calcular. O número de colunas da matriz A não é igual ao número de linhas da matriz B.");
        return;
    }

    let matrizC = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizC[i] = new Array(colunasB).fill(0);
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizC;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
if (resultado) {
    console.log("Matriz Resultante (A x B):");
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i].join("\t"));
    }
}