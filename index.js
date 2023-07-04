
//inistialize the count as 0
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-El")
let countEl = document.getElementById("count-el")
let count = 0
let message = "Previous Count :" 

function increment(){
    count += 1
    countEl.textContent = count
}

function decrement(){
    count -= 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

