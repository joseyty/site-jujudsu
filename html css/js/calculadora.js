let  previousnumber = ""
let nextnumber = ""
let operator = ""
  // 10 + 5


  function anexnumber(number) {

    if(operator === ""){ 
          if(previousnumber.includes(".") && number === "." )  return
   previousnumber += number
    } else {
        if(nextnumber.includes(".") && number === "." )  return
        nextnumber += number
    }
    

   updateScreen()

  }

  const   numberButtons = document.querySelectorAll("[data-number]")
numberButtons.forEach(button =>  button.addEventListener("click", () => anexnumber(button.dataset.number)
))

function updateScreen() {
    if(operator=== ""){

     screenDisplay.innerHTML = previousnumber
    } else {
 screenDisplay.innerHTML= `${previousnumber} ${operator} ${nextnumber}` 
}

 }

const screenDisplay = document.querySelector(".screen-display")

const operatorButtons = document.querySelectorAll("[data-operator]")
operatorButtons.forEach(button => button.addEventListener("click", () => { operator = button.dataset.operator


updateScreen()

}
))

function calculate() {
    switch(operator) {
        case "X":
            previousnumber = parseFloat(previousnumber) * parseFloat(nextnumber)
            break
        case "+":
            previousnumber = parseFloat(previousnumber) + parseFloat(nextnumber)
            break
        case "-":
            previousnumber = parseFloat(previousnumber) - parseFloat(nextnumber)
            break
        case "/":
            previousnumber = parseFloat(previousnumber) / parseFloat(nextnumber)
            break
    }

    nextnumber = ""
    operator = ""
}

const equalButton = document.querySelector("[data-equal]")
equalButton.addEventListener("click", () => {
    if(previousnumber === "" || nextnumber === "" || operator === "") return
    calculate()
    updateScreen()
})
