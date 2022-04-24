
function Show() {
    var dataSelect = document.getElementById("dataSelect");

    var valueSelect = dataSelect.options[dataSelect.selectedIndex].value;

    if (valueSelect == 'B') {
        document.querySelector("#kq").innerHTML = "Xin chào Bố";
    } else if (valueSelect == 'M') {
        document.querySelector("#kq").innerHTML = "Xin chào Mẹ";
    } else if (valueSelect == 'A') {
        document.querySelector("#kq").innerHTML = "Xin chào Anh"
    } else {
        document.querySelector("#kq").innerHTML = "Xin chào Chị"
    }
    console.log(valueSelect);
}