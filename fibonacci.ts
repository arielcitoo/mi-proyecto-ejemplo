// fibonacci.ts - Versión inicial
function fibonacci(n: number): number {
    console.log(`Calculando fibonacci de ${n}`);
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejecutar ejemplo
const resultado = fibonacci(10);
console.log(`Resultado: ${resultado}`);
