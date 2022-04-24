function Total() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var arr = []

    arr.push(Number(number1));
    arr.push(Number(number2));
    arr.push(Number(number3));

    arr.sort()
    document.querySelector("#kq").innerHTML = arr
    console.log(arr);
}