function calcularSoma(){

    let num1 = Number(
        document.getElementById('num1').value
    )

    let num2 = Number(
        document.getElementById('num2').value
    )

    let resultado = num1 + num2

    let resposta = document.getElementById('resposta')

    resposta.innerHTML =
        `A soma dos dois números é: ${resultado}`
}