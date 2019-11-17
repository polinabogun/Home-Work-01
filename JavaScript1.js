function plus() {
    var number1, number2, result;


    number1 = document.getElementById('n1').value;
    number1 = parseInt(number1);

    number2 = document.getElementById('n2').value;
    number2 = parseInt(number2);


    result = number1 + number2;
    document.getElementById('result').innerHTML = result;

}
function minus() {
    var number1, number2, result;


    number1 = document.getElementById('n1').value;
    number1 = parseInt(number1);

    number2 = document.getElementById('n2').value;
    number2 = parseInt(number2);


    result = number1 - number2;
    document.getElementById('result').innerHTML = result;

}
function multi() {
    var number1, number2, result;


    number1 = document.getElementById('n1').value;
    number1 = parseInt(number1);

    number2 = document.getElementById('n2').value;
    number2 = parseInt(number2);


    result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}
function div() {
    var number1, number2, result;


    number1 = document.getElementById('n1').value;
    number1 = parseInt(number1);

    number2 = document.getElementById('n2').value;
    number2 = parseInt(number2);


    result = number1 / number2;
    document.getElementById('result').innerHTML = result;

}