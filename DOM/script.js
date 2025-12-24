// const GrandParent = document.querySelector("#grandParent");
// const Parent = document.querySelector("#parent");
// const Child = document.querySelector("#child");


// GrandParent.addEventListener('click', function(){
//     console.log("Grand Parent");
// },false)

// Parent.addEventListener('click', function(){
//     console.log("Parent");
// }, false)

// Child.addEventListener('click', function(){
//     console.log("Child");
// }, false)


const tableBody = document.querySelector("tbody");


function calcTotal() {

    let total = 0;
    const allPriceElements = document.querySelectorAll('[data-ns-test="price"]');

    allPriceElements.forEach(el => {
        total += Number(el.textContent);

    });


    const totalRow = document.createElement("tr");
totalRow.innerHTML = `<td>Total</td> <td>${total}</td>`

tableBody.appendChild(totalRow);


    

}