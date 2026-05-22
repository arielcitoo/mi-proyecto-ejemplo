// Función que genera los primeros 'n' números de Fibonacci
function generarFibonacci(n: number): number[] {
    const serie: number[] = [0, 1];

    if (n <= 0) return [];
    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
        const siguienteNumero = serie[i - 1] + serie[i - 2];
        serie.push(siguienteNumero);
    }

    return serie;
}

// Configura cuántos números quieres mostrar
const cantidadNumeros: number = 20;
const resultado = generarFibonacci(cantidadNumeros);

// Muestra el resultado en la consola
console.log(`Los primeros ${cantidadNumeros} números de Fibonacci son:`);
console.log(resultado);
