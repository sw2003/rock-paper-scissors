function main(){
    let user_pick = user_move()

    if (user_pick){
        let computer_pick = computer_move()
        compute_winner(user_pick, computer_pick)
    }
    else{
        main()
    }
}

function computer_move(){
    let ran_int = Math.round(Math.random() * 3)
    let computer_choice 
    if (ran_int == 1){
        console.log("computer has choosen rock")
        computer_choice = "ROCK"
    } else if (ran_int == 2){
        console.log("computer has choosen paper")
        computer_choice = "PAPER"
    }
    else{
        console.log("computer has chossen scissors")
        computer_choice = "SCISSORS"
    }

    return computer_choice
}

function user_move(){
    let user_input = window.prompt("type rock paper or scissors")
    if (user_input){
        let user_input_adjust = user_input.toUpperCase().trim()
        if (user_input_adjust == "ROCK" || user_input_adjust == "PAPER" || user_input_adjust == "SCISSORS"){
            console.log("you have choosen" + " " + user_input_adjust.toLowerCase())
            return user_input_adjust
        }
        else{
            console.log("You need to type 'Rock', 'Paper' or 'Scissors'")
            return false
        }
    }
    else{
        return false
    }
}

function compute_winner(user, computer){
    if (user == computer){
        console.log("its a tie")
    }
    else if (user == "ROCK" && computer == "SCISSORS" || user == "SCISSORS" && computer == "PAPER" || user == "ROCK" && computer == "SCISSORS"){
        console.log("you win")
    }
    else{
        console.log("you lose")
    }

    main()

}


window.onload = function(){
    main()
}



