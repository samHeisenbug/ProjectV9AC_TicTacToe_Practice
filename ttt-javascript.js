let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-Game");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

let cnt = 0;

const winnerPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[3, 4, 5],
	[6, 7, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6]
];

const resetGameFunc = () => {
	turnO = true;
	enabledButtonAll();
	msgContainer.classList.add("hide");
	cnt = 0;
}

const disableButtonAll = () => {
	for(let box of boxes){
		box.disabled = true;
	}
};

const enabledButtonAll = () => {
	for(let box of boxes){
		box.disabled = false;
		box.innerText = "";
	}
};

const gameDraw = () => {
	msgContainer.classList.remove("hide");
	msg.innerText = "Draw";
}

const checkWinner = () => {
	for(let pattern of winnerPattern){
		let winBox1 = boxes[pattern[0]].innerText;
		let winBox2 = boxes[pattern[1]].innerText;
		let winBox3 = boxes[pattern[2]].innerText;

		if(winBox1 != "" && winBox2 != "" && winBox3 != ""){
			if(winBox1 === winBox2 && winBox2 === winBox3){
				msgContainer.classList.remove("hide");
				msg.innerText = "Congratulation, Winner is: " + winBox1;
				disableButtonAll();
			}
		}
	}
}

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if(turnO){
			box.innerText = "O";
			box.style.color = "red";
			turnO = false;
		}
		else{
			box.innerText = "X";
			box.style.color = "blue";
			turnO = true;
		}
		cnt++;
		box.disabled = true;
		checkWinner();
		let isWinner = checkWinner();
		if(cnt ===9 && !isWinner){
			gameDraw();
		}
	})
});

newGame.addEventListener("click", resetGameFunc);
resetGame.addEventListener("click", resetGameFunc);