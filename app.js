let boxes = document.querySelectorAll(".button");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new_game");
let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset_btn = () => {
    turnO = false;
    enable();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkPattern();
    })
});

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};

const checkPattern = () =>{
    for(pattren of winPattern)
    {
        pos1Val = boxes[pattren[0]].innerText
        pos2Val = boxes[pattren[1]].innerText
        pos3Val = boxes[pattren[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("Winer is : ", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click", reset_btn);
reset.addEventListener("click", reset_btn);