function showNumber(event, name){
    const selectedCharacter = event.target.innerText
    const currentValue = document.getElementById("display").value
    // convert value to number
    const convertedValue = Number(currentValue)

    if (convertedValue === 0) {
        document.getElementById("display").value =  selectedCharacter   
    } else if (selectedCharacter === 'C'){
        document.getElementById("display").value = "0"
    }else if (selectedCharacter === '='){
        const result = eval(currentValue)
        document.getElementById("display").value = result
    }else {
        document.getElementById("display").value =  document.getElementById("display").value + selectedCharacter
    }

   
}