let button = document.querySelector("button")

let first = document.querySelector("#first")
let second = document.querySelector("#second")

let amount = document.querySelector("#billAmount")
let tip_percent = document.querySelector("#tipAmount")

button.addEventListener("click",()=>{
    let totalAmount = Number(amount.value);
    let tipVal = Number(tip_percent.value);

    let finalAmount = (tipVal / 100) * totalAmount;

    finalAmount = Number(finalAmount.toFixed(2))
    
    console.log(finalAmount)

    console.log(typeof finalAmount)
    console.log(typeof totalAmount)
    
    first.textContent = `${finalAmount}`
    second.textContent = `${finalAmount + totalAmount}`
})
