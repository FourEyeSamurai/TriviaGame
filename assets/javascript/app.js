$(document).ready(function() {

/*You'll create a trivia game that shows only one question
until the player answers it or their time runs out.

If the player selects the correct answer, show a screen congratulating them 
for choosing the right option. 
After a few seconds, display the next question -- do this without user input.
The scenario is similar for wrong answers and time-outs.

If the player runs out of time, tell the player that time's up and 
display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player 
they selected the wrong option and then display the correct answer. 
Wait a few seconds, then show the next question.

On the final screen, show the number of correct answers, 
incorrect answers, and an option to restart the game (without reloading the page).*/

var questions = [{
	quest: "What is Sleeping Beauty's name?",
	choices: ["Aurora", "Daphne", "Samantha", "Helen"],
	answer: "Aurora"
}, {
	quest: "Who is the captain of the Nautilus?",
	choices: ["Captain Dory", "Captain Flynn", "Captain America", "Captain Nemo"],
	answer: "Captain Nemo"
}, {
	quest: "Who is the Sorcerer in Fantasia's Sorcerer's Apprentice?",
	choices: ["Mickey Mouse", "Yen Sid", "Goofy", "Sorcerer Supreme"],
	answer: "Yen Sid"
}];

var gameState = {
	correctAnswer: 0,
	wrongAnswer: 0,
	guessedQuestion: [],
	currentQuestion:{}
};

//OnClick function for selecting answer
$("#choice").on('click', function(){
	if(("#choice").data('clicked') === questions[1].answer){
		console.log("Correct Answer");
		correctAnswer ++;
		console.log(correctAnswer);
	}else{
		console.log("Wrong Answer");
		wrongAnswer ++;
		console.log(wrongAnswer);
	}
	guessedQuestion.push(questions[1]);
});


//OnClick function for selecting reset
$(".next").on('click', function(){

});

//Timer 




$("#question").html(questions[1].quest);


for (var i = 0; i < questions[1].choices.length; i++) {
	$("#choice").html(questions[1].choices);
	
};


// console.log(questions[1].quest);
// console.log(questions[1].choices[2]);
// console.log(questions[1].answer);




});