/*var a = document.querySelector("h1")
a.innerHTML = "Word"
a.style.color = "blue"
a.addEventListener("click", function(){
    a.innerHTML = "universe"
    a.style.color = "green"
    a.style.backgroundColor = "yellow"
})*/

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0
btn.addEventListener("click", function(){
    if(flag == 0)
    {
    bulb.style.backgroundColor = "yellow"
    console.log("On")
    flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("Off")
        flag = 0
    }
})