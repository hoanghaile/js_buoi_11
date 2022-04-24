

function Total() {
    const canh1 = Number(document.getElementById('number1').value)
    const canh2 = Number(document.getElementById('number2').value)
    const canh3 = Number(document.getElementById('number3').value)

    let resuft
    const canhhuyen = Math.pow(canh3, 2)
    if (Math.pow(canh1, 2) + Math.pow(canh2, 2) === canhhuyen) {
        resuft = "tam giac vuong"
    } else {
        resuft = ""
    }


    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        console.log('tam giac deu');
    } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        console.log('tam giac can');
    } else if (resuft !== "") {
        console.log('tam giac vuong ');

    } else {
        console.log('tam giac nao do');
    }
    // for (let index = 0; index < array.length; index++) {
    //    switch (array) {
    //        case value:

    //            break;

    //        default:
    //            break;
    //    }

    // }
}