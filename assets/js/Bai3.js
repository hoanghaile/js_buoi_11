function Total() {
    let array = []

    document.querySelectorAll('.all > input').forEach((res, idex) =>
        array.push(Number(res.value))
    )
    let count = 0
    let sole = 0
    for (let index = 0; index < array.length; index++) {


        if (Number(array[index]) % 2 == 0) {
            count++


        }
        sole = array.length - count

    }
    document.querySelector("#kq").innerHTML = `co ${count} so chan va ${sole}`


}