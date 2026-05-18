/**
 * Realiza un único ensayo de Bernoulli.
 * 
 * @param p Probabilidad de éxito (entre 0 y 1).
 * @returns 1 para éxito, 0 para fracaso.
 */
function bernoulliTrial(p: number): 0 | 1 {
    if (p < 0 || p > 1) {
        throw new Error("La probabilidad 'p' debe estar entre 0 y 1.");
    }
    
    // Math.random() genera un número entre 0 (incluido) y 1 (excluido)
    return Math.random() < p ? 1 : 0;
}

/**
 * Simula múltiples ensayos de Bernoulli y calcula la proporción de éxitos.
 * 
 * @param n Número total de ensayos.
 * @param p Probabilidad de éxito.
 * @returns Array con los resultados de cada ensayo.
 */
function simularBernoulli(n: number, p: number): (0 | 1)[] {
    const resultados: (0 | 1)[] = [];
    for (let i = 0; i < n; i++) {
        resultados.push(bernoulliTrial(p));
    }
    return resultados;
}

// ==========================================
// Ejemplo de uso
// ==========================================
const probabilidadExito: number = 0.6; // 60% de probabilidad de éxito
const cantidadEnsayos: number = 1000;

const resultados: (0 | 1)[] = simularBernoulli(cantidadEnsayos, probabilidadExito);

// Calcular la media (debe aproximarse a 0.6)
const exitos: number = resultados.reduce((acc, val) => acc+val, 0);
const promedio: number = exitos / cantidadEnsayos;

console.log(`Ensayos realizados: ${cantidadEnsayos}`);
console.log(`Probabilidad teórica: ${probabilidadExito}`);
console.log(`Probabilidad experimental: ${promedio}`);
