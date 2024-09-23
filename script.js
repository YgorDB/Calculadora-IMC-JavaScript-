function BtnEnv() {
    const altura = parseFloat(document.getElementById('bar-altura').value);
    const peso = parseFloat(document.getElementById('bar-peso').value);

    const imc = (peso / (altura * altura)).toFixed(2);

    let msg = '';

    if (imc < 18.5) {
        msg = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        msg = 'Peso Normal';
    } else if (imc >- 25 && imc < 29.9) {
        msg = 'Sobre peso'
    } else if (imc >= 30 && imc < 34.9) {
        msg = 'Obesidade grau 1'
    } else if (imc >= 35 && imc < 39.9) {
        msg = 'Obesidade grau 2'
    } else {
        msg = 'Obesidade grau 3'
    }

    document.getElementById('resultado').innerHTML = (`${msg}`);
}