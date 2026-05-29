// Función que genera los primeros 'n' números de Fibonacci
function generarFibonacci(n: number): number[] {
    const secuencia1: number[] = [0, 1];

    if (n <= 0) return [];
    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
        secuencia1.push(secuencia1[i - 1] + secuencia1[i - 2]);
    }

    return secuencia1;
}

// Configura cuántos números quieres mostrar
const cantidadNumeros: number = 50;
const resultado = generarFibonacci(cantidadNumeros);

// Muestra el resultado en la consola
console.log(`Los primeros ${cantidadNumeros} números de Fibonacci a contuanción:`);
console.log(resultado);
console.log('este es un resultado nuevo');
