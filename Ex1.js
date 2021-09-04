const r = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
let i = 0,
    t = 0,
    aux = 0,
    menor = r[i];

// Calcula o menor número de um Array

function retornaMenor() {
    while (i < r.length) {
        
        if (menor > r[i]) {
            menor = r[i]

        }
        if (i == r.length - 1) {
            return (menor)

        }
        i++
    }}

// Imprime no console os três menores números de um Array

while (aux < 3) {
    console.log(aux, retornaMenor().toFixed(2))
    var index = r.indexOf(menor);
    r.splice(index, 1)
    i = 0;
    aux++
    menor = 1;
}