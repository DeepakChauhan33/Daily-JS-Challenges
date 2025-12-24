const GrandParent = document.querySelector("#grandParent");
const Parent = document.querySelector("#parent");
const Child = document.querySelector("#child");


GrandParent.addEventListener('click', function(){
    console.log("Grand Parent");
},false)

Parent.addEventListener('click', function(){
    console.log("Parent");
}, false)

Child.addEventListener('click', function(){
    console.log("Child");
}, false)