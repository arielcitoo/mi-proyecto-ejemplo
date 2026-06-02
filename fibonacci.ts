// fibonacci.ts - Versión de Carlos (con validación)
function fibonacci(n: number): number {
    // Validación de entrada (nuevo)
    if (typeof n !== 'number' || n < 0) {
        throw new Error('El argumento debe ser un número no negativo');
    }

    console.log(`Calculando fibonacci de ${n}`);
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejecutar ejemplo con manejo de errores
try {
    const resultado = fibonacci(10);
    console.log(`Resultado: ${resultado}`);
    console.log(`Fibonacci(10) = ${resultado}`);
} catch (error) {
    console.error('Error:', error.message);
}