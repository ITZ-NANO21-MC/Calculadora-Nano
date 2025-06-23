let pantalla = document.getElementById('pantalla');
let operacionActual = '';
let operador = '';
let primerOperando = '';

function agregarNumero(numero) {
    operacionActual += numero;
    pantalla.value = operacionActual;
}

function agregarOperador(op) {
    if (operacionActual === '') return;
    
    if (primerOperando !== '') {
        calcularResultado();
    }
    
    operador = op;
    primerOperando = operacionActual;
    operacionActual = '';
}

function calcularResultado() {
    if (primerOperando === '' || operacionActual === '' || operador === '') return;
    
    let resultado;
    const num1 = parseFloat(primerOperando);
    const num2 = parseFloat(operacionActual);
    
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: División por cero");
                limpiarPantalla();
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }
    
    pantalla.value = resultado;
    operacionActual = resultado.toString();
    primerOperando = '';
    operador = '';
}

function limpiarPantalla() {
    operacionActual = '';
    primerOperando = '';
    operador = '';
    pantalla.value = '';
}