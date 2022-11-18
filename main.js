const input = document.querySelectorAll("input")
const inputA = document.querySelectorAll("input")[0]
const inputB = document.querySelectorAll("input")[1]
const btn = document.querySelector("button")
const message = document.querySelectorAll(".message")

input.forEach(inputs => {
    inputs.addEventListener("keyup", function(){
        if(+inputB.value < +inputA.value){
            //input A
            inputA.style.borderColor = "red"
            inputA.style.color = "red"

            //btn
            btn.style.borderColor = "red"
            btn.style.color = "red"
            btn.style.setProperty('--message-background-color', 'red')

            // error message
            message[0].innerHTML = `Campo A maior que Campo B`
            message[0].style.backgroundColor = 'red'
            message[0].style.display = 'block'
            message[1].style.display = 'none'
        }else if(+inputB.value == +inputA.value){
            //input A
            inputA.style.borderColor = "#333"
            inputA.style.color = "black"
            //btn
            btn.style.borderColor =  "#333"
            btn.style.color = "black"
            btn.style.setProperty('--message-background-color', '#333')

            // error message
            message[0].style.display = 'none'
            message[1].style.display = 'none'
        }else{
            //input A
            inputA.style.borderColor = "green"
            inputA.style.color = "green"
            //btn
            btn.style.borderColor = "green"
            btn.style.color = "green"
            btn.style.setProperty('--message-background-color', 'green')
            // error message
            message[0].style.display = 'none'
            message[1].style.display = 'block'
            message[1].style.backgroundColor = 'green'
            message[1].innerHTML = `Campo B maior que Campo A`
        }
    })
});