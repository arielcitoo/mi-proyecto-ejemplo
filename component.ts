// fibonacci.ts - Versión de Ana (muchos cambios juntos)
function fibonacci(n: number): number {
    // Validación de entrada (cambio 1)
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('El número debe ser entero no negativo');
    }

    // Caso base (cambio 2 - modifica la condición original)
    if (n <= 1) {
        return n;
    }

    // Implementación con memoización (cambio 3 - nuevo código)
    const memo: Map<number, number> = new Map();
    function fibMemo(num: number): number {
        if (num <= 1) return num;
        if (memo.has(num)) return memo.get(num)!;
        const result = fibMemo(num - 1) + fibMemo(num - 2);
        memo.set(num, result);
        return result;
    }

    return fibMemo(n);
}

// Logging de resultado (cambio 4)
const result = fibonacci(10);
console.log(`Resultado: ${result}`); // Modificado
console.log('Ejecución completada'); // Nuevo
