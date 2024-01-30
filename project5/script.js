const SnakeWaterGun = (guess,computer) => {
    if (guess == computer){
        return false
    }
    else if (guess == "S" && computer == "W"){
        return true
    }
    else if (guess == "W" && computer == "G"){
        return true
    }
    else if (guess == "G" && computer == "S"){
        return true
    }
    else{
        return false
    }
}
let cont=true;
while(cont){
    let guess = prompt("enter a value S,W,G").toUpperCase()
    let array = ["S","W","G"]
    let computer = array[Math.floor(Math.random() * array.length)];
    console.log(guess,computer)
    if (SnakeWaterGun(guess,computer)){
        alert("you win")
    }
    else{
        alert("you lose")
    }
    cont = confirm("do you want to continue")
    if (cont){
        continue
    }
    else{
        break
    }
}

