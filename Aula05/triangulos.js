//entrada de dados
var lado1 = 30
var lado2 = 20
var lado3 = 10

//processamento
var equilatero = lado1 == lado2 && lado2 == lado3
var isoceles = (lado1 == lado2 && lado1 != lado3) || 
               (lado2 == lado3 && lado2 != lado1) || 
               (lado1 == lado3 && lado1 != lado2)
var escaleno = lado1 != lado2 && lado2 != lado3 && lado1 != lado3

//saída dos dados
console.log('É equilátero: ' + equilatero)
console.log('É isóceles: ' + isoceles)
console.log('É escaleno: ' + escaleno)