//This program generates questions and calculates the total score of the questions answered correctly

var amountOfQuestions = 10;
var score = 0;
var notification = alert("Welcome to our CBT for programmers, You have 10 questions to answer")
var username = prompt("What is your name?")
var htmlHeading = document.write(`<h1>CBT EXAM FOR PROGRAMMERS</h1>`)
var question1;
var question2;
var question3;
var question4;
var question5;
var question6;
var quesiton7;
var question8;
var question9;
var question10;


//Questions
function StartQuestion(){


question1 = document.write(`<div>1. What programming language is best used in Data Science, AI and ML?\n`)
question1 += document.write(`\n<input type='button' value='answer' id = 'ans1' onclick = 'ans1()'></div><br>`)


question2 = document.write('<div>'+"2. What is the output of this algorithm?\nprint('hello world')")
question2 += document.write(`\n<input type='button' value='answer' id = 'ans2' onclick = 'ans2()'>` + `</div><br>`)


question3 = document.write('<div>'+"3. What programming language uses this algorithm?\n'System.println.out'" )
question3 += document.write(`\n<input type='button' value='answer' id = 'ans3' onclick = 'ans3()'>` + `</div><br>`)


question4 = document.write('<div>'+"4. What is the extention used for a JavaScript program?" )
question4 += document.write(`\n<input type='button' value='answer' id = 'ans4' onclick = 'ans4()'>` + `</div><br>`)


question5 = document.write('<div>'+"5. Which Programming language determines the design of a web page?")
question5 += document.write(`\n<input type='button' value='answer' id = 'ans5' onclick = 'ans5()'>` + `</div><br>`)


question6 = document.write('<div>'+"6. What is the output of this code : "+'<br>'+"func math(a, b){"+'<br>'+" return a * b "+'<br>'+"}"+'<br>'+" math(5, 5)\n")
question6 += document.write(`\n<input type='button' value='answer' id = 'ans6' onclick = 'ans6()'>` + `</div><br>`)


question7 = document.write('<div>'+"7. what is the output of this code :"+'<br>'+"def math(y):"+'<br>'+"....x = 10"+'<br>'+"....return (x * x) + y"+'<br>'+"y = 10 + 10 "+'<br>'+"math(y)")
question7 += document.write(`\n<input type='button' value='answer' id = 'ans7' onclick = 'ans7()'>` + `</div><br>`)


question8 = document.write('<div>'+"8. What language can be used for both backend and frontend web development?")
question8 += document.write(`\n<input type='button' value='answer' id = 'ans8' onclick = 'ans8()'>` + `</div><br>`)


question9 = document.write('<div>'+"9. What is the output of this algorithm?\n//document.write('JavaScript')")
question9 += document.write(`\n<input type='button' value='answer' id = 'ans9' onclick = 'ans9()'>` + `</div><br>`)


question10 = document.write('<div>'+"10. What is the full meaning of 'HTML'\n")
question10 += document.write(`\n<input type='button' value='answer' id = 'ans10' onclick = 'ans10()'>` + `</div><br>`)


};StartQuestion()


ans1 = function (){
	prompt("1. Input Your Answer")
};
ans2 = function (){
	prompt("2. Input Your Answer")
};
ans3 = function (){
	prompt("Input Your Answer")
};
ans4 = function (){
	prompt("Input Your Answer")
};
ans5 = function (){
	prompt("Input Your Answer")
};
ans6 = function (){
	prompt("Input Your Answer")
};
ans7 = function (){
	prompt("Input Your Answer")
};
ans8 = function (){
	prompt("Input Your Answer")
};
ans9 = function (){
	prompt("Input Your Answer")
};
ans10 = function ans10(){
	prompt("Input Your Answer")
	// score calculation
if (answ1 === ans1){
	score += 1
}
if (answ2 === ans2){
	score += 1
}
if (answ3 === ans3){
	score += 1
}
if (answ4 === ans4){
	score += 1
}
if (answ5 === ans5){
	score += 1
}
if (answ6 === ans6){
	score += 1
}
if (answ7 === ans7){
	score += 1
}
if (answ8 === ans8){
	score += 1
}
if (answ9 === ans9){
	score += 1
}
if (answ10 === ans10){
	score += 1
}
	totalscore()
}


var answ1 = 'Python';
var answ2 = 'hello world';
var answ3 = 'Java';
var answ4 = '.js';
var answ5 = 'CSS';
var answ6 = '25';
var answ7 = '120';
var answ8 = 'Javascript'
var answ9 = 'nothing'
var answ10 = 'Hpertext Markup Language'


function totalscore(){
	if ( score >= 7 ){
		alert(`${username}, Good Performance, Scored ${score} out of 10`)
	}else if(score >=5 ){
		alert(`average Performance, Scored ${score} out of 10`)
	}else{
		alert(`Failed the test scored, ${username} you scored ${score} out of 10`)
	}
}

