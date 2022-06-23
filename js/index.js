const boxContainer = document.getElementById("box-container");
const questionName = document.getElementById("question");
const choice_1 = document.getElementById("choice-1");
const choice_2 = document.getElementById("choice-2");
const choice_3 = document.getElementById("choice-3");
const choice_4 = document.getElementById("choice-4");
const scoreContainer = document.getElementById("score");
let indice= 0;
let score = 0;

function loadQuestion(index){
    question = questions[index];
    choices = [...question.options];
    choices.push(question.answer);
    for (let i = 0; i < 4; i++) {
        choices.sort(()=>Math.random() - 0.5);   
    }
    questionName.innerHTML = question.question;
    choice_1.innerHTML = choices[0];
    choice_2.innerHTML = choices[1];
    choice_3.innerHTML = choices[2];
    choice_4.innerHTML = choices[3];
}
choice_1.addEventListener("click", function (e){
    e.preventDefault();
    selectChoice(0);
});
choice_2.addEventListener("click", function (e){
    e.preventDefault();
    selectChoice(1);
});
choice_3.addEventListener("click", function (e){
    e.preventDefault();
    selectChoice(2);
});
choice_4.addEventListener("click", function (e){
    e.preventDefault();
    selectChoice(3);
});
function loadScore(){
    for (let i = 0; i < questions.length; i++) {
        const indicator = document.createElement('DIV');
        indicator.classList.add("indice")
        scoreContainer.appendChild(indicator)
    }
}
function viewScore(){
    scoreHtml = document.createElement('DIV');
        scoreHtmlTitle = document.createElement('H2');
        scoreHtmlTitle.classList.add("question");
        scoreHtmlTitle.innerHTML = `Se acabo el PokeQuiz <br>Haz acertado ${score} respuestas de ${questions.length} preguntas. <br> Recarga la pagina si quieres volver a jugar`
        scoreHtml.appendChild(scoreHtmlTitle);
        boxContainer.appendChild(scoreHtml);
        indice = 0;
        score= 0;
}
function showScore(answer){
    scoreContainer.children[indice].classList.add(answer)
}
function selectChoice(index){
    let validate = choices[index] == question.answer;
    if(validate){
        showScore("true")
        score++;
    }
    else{
        showScore("false")
    }
    indice++;
    if(indice >= questions.length){
        viewScore();
    }
    loadQuestion(indice);
}

loadScore();
loadQuestion(indice);