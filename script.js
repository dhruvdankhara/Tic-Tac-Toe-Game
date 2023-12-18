let boxes = document.querySelectorAll(".box");
let main = document.querySelector(".main");
let winner = document.querySelector(".winner");
let resetbtn = document.querySelector(".resetbtn")
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

const disable = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const reset = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


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
        let patt1 = boxes[patten[0]].innerText;
        let patt2 = boxes[patten[1]].innerText;
        let patt3 = boxes[patten[2]].innerText;
        
        if(patt1 !== "" && patt2 !== "" && patt3 !== ""){
            if(patt1 == patt2 && patt2 == patt3){
                console.log(patt1);
                winner.innerText = `congraculations! winner is ${patt1}.`
                disable();  
            }
        }
        // By me
        // if(boxes[patten[0]].innerText == 'X' && boxes[patten[1]].innerText == 'X' && boxes[patten[2]].innerText == 'X'){
            //     console.log("win");
            //     winner.innerText = "Game Winner is X ."
            // }
            // if(boxes[patten[0]].innerText == '0' && boxes[patten[1]].innerText == '0' && boxes[patten[2]].innerText == '0'){
                //     console.log("win");
                //     winner.innerText = "Game Winner is O ."
                // }
            }
        }
        
        
        
        
        resetbtn.addEventListener("click", reset);