const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question : "How many categories for towels does Monica have?",
        imgSrc : "images/monicaquiz.gif",
        choiceA : "11",
        choiceB : "9",
        choiceC : "7",
        correct : "A"
    },{
        question : "What is Marcel's favorite song?",
        imgSrc : "images/marcel.gif",
        choiceA : "The Macarena",
        choiceB : "The Lion Sleeps Tonight",
        choiceC : "My Heart Will Go On",
        correct : "B"
    },{
        question : "What was Chandler's job before he moves into advertising?",
        imgSrc : "images/chandlerquiz.gif",
        choiceA : "'transponster'",
        choiceB : "Accountant",
        choiceC : "Statistical analysis",
        correct : "C"
    }
];



const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#106E1E";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#6E2910";
}

function scoreRender(){
    scoreDiv.style.opacity = "0.95";
    scoreDiv.style.transform = "translateY(0%)";

    const scorePerCent = Math.round(100 * score/questions.length);


    let img = (scorePerCent >= 80) ? "images/goodjob.gif" :
              (scorePerCent >= 60) ? "images/almost.gif" :
              (scorePerCent >= 40) ? "images/almost.gif" :
              (scorePerCent >= 20) ? "images/chandlerkidding.gif" :
              "images/chandlerkidding.gif";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
