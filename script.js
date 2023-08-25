// Questions that will be asked
const Questions = [{
	q: "What is the name of the lander of Chandrayaan 3?",
	a: [{ text: "Pragyaan", isCorrect: false },
	{ text: "Ritu", isCorrect: false },
	{ text: "Vikram", isCorrect: true },
	{ text: "Dhruv", isCorrect: false }
	]

},
{
	q: " On what date did Chandrayaan 3 land on the moon's surface?",
	a: [{ text: "17th August, 2023", isCorrect: false, isSelected: false },
	{ text: "14th July, 2023", isCorrect: false },
	{ text: "20th August, 2023", isCorrect: false },
	{ text: "23rd August, 2023 ", isCorrect: true }
	]

},
{
	q: "Who is the project director of India’s Moon Mission, Chandrayaan 3",
	a: [{ text: "Vikram Sarabhai", isCorrect: false },
	{ text: "P Veeramuthuvel", isCorrect: true },
	{ text: "Ritu Karidhal Srivastava", isCorrect: false },
	{ text: "S. Somnath", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
