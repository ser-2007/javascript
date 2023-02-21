function Question(text,choices,answer){
    this.text = TextEvent;
    this.choices = choices;
    this.answer = answer;
}


// Question prototype

Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}


// Quiz Constructer

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}


// quiz isFinish 

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}


// Quiz guess 
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}



var q1 = new Question("What is the best programming language",["C#","python","javascript","java"],"javascript");

var q2 = new Question("What is the most popular programming language", ["Java","python","javascript","nodejs"],"python");

var q3 = new Question("What is the best modern programming language",["Java","python","javascript","asp.net"], "javascript");

var questions = [q1,q2,q3];

/*console.log(q1.checkAnswer("c#"));
console.log(q1.checkAnswer("javascript"));
console.log(q2.checkAnswer("nodejs")); */

// Start Quiz

var quiz = new Quiz(questions);

// console.log(quiz.isFinish());
//console.log(quiz.getQuestion());
//console.log(quiz.isFinish());

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length; i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
        
        

        }
    }
}


function guess(){



}

function showScore(){


}