document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("button").addEventListener("click",function(){
        document.querySelector("button").innerText = "Tanks";
        setTimeout(function(){
            document.querySelector("button").innerText = "Click me!";
        }, 1000)
    })
})