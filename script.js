let boxes = document.querySelectorAll(".box");
let main = document.querySelector(".main");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset")
let turnX = true;

let win = [
    [0, 1, 2],  
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X"; 
            turnX = false;
        }else{
            box.innerText = "0";
            turnX = true;
        }
        box.disabled = true;
        print();
    });
});


function print(){
    for(let patten of win){

        if(boxes[patten[0]].innerText == 'X' && boxes[patten[1]].innerText == 'X' && boxes[patten[2]].innerText == 'X'){
            console.log("win");
            winner.innerText = "Game Winner is X ."
        }
        if(boxes[patten[0]].innerText == '0' && boxes[patten[1]].innerText == '0' && boxes[patten[2]].innerText == '0'){
            console.log("win");
            winner.innerText = "Game Winner is O ."
        }
    }
}


reset.addEventListener("click", () => {
    let i = 0;
    for(i = 0; i < 9; i++){
        boxes[i].innerText = "";
        boxes[i].disabled = false;

    }
})

