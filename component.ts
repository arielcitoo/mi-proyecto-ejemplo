// fibonacci.ts - Versión de Carlos (ya en GitHub)
function fibonacci(n: number): number {
    try {
        if (n < 0) return 0; // Manejador de error diferente
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    } catch (error) {
        console.error('Error en fibonacci:', error);
        return -1;
    }
}

console.log(`Fibonacci(10) = ${fibonacci(10)}`);
