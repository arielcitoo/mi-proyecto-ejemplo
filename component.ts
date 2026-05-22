// Función que genera los primeros 'n' números de Fibonacci
function generarFibonacci(n: number): number[] {
    const secuencia: number[] = [0, 1];

    if (n <= 0) return [];
    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
        const siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(siguienteNumero);
    }

    return secuencia;
}

// Configura cuántos números quieres mostrar
const cantidadNumeros: number = 8;
const resultado = generarFibonacci(cantidadNumeros);

// Muestra el resultado en la consola
console.log(`Los adfafdasdfa ${cantidadNumeros} números de Fiboadfasdfasfasdfnacci son:`);
console.log(resultado);
