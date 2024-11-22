class Quiz{
    constructor(){
        this.question = document.getElementById('question');
        this.buttonContainer = document.getElementById('button-container');
        this.index = 0;
        this.totalQuizzes = document.getElementById('totalQuizzes');
        this.currentQuiz = document.getElementById('currentQuiz');
        this.score = document.getElementById('score');
    }

    request(){
        fetch('questions.json')
            .then(req => req.json())
            .then(value =>{
                next.style.display = 'none'
                this.currentQuiz.innerHTML = `Question: ${this.index + 1}`;
                this.score.innerHTML = score + ' point/s';

                const setOfQuestion = value.questions[this.index].question;

                const question = value.questions[this.index].options;

                const answer = value.questions[this.index].answer;

                const trivia = value.questions[this.index].trivia
                this.index++;
                this.showQuestion(setOfQuestion, question, answer, trivia)
            })
    }
    showQuestion(indexQuestion, question, answer, trivia){
        this.question.innerHTML = indexQuestion;

        for(let i = 0; i<question.length; i++){
            if(question[i] === answer){
                this.buttonContainer.insertAdjacentHTML('beforeend', `<button class="choicesbtn" id="correct" onclick="showNext('${question[i]}', '${answer}',  '${trivia}')"> ${question[i]}</button>`);
                continue;
            }
                this.buttonContainer.insertAdjacentHTML('beforeend', `<button class="choicesbtn" onclick="showNext('${question[i]}', '${answer}',  '${trivia}')"> ${question[i]}</button>`)
        }
    }

}
let score = 0;
//checking the answer
function showNext(isChoice, answer, trivia){
    const buttonContainer = document.getElementById('button-container');
    if(isChoice === answer){
        score += 1;
        document.getElementById('p').insertAdjacentHTML('beforeend', `<span id="result">Correct!: </span>` + trivia)
        correct.style.border = 'solid green'
        result.style.color = 'green'
    }
    else{
        document.getElementById('p').insertAdjacentHTML('beforeend', `<span id="result">Wrong!: </span>` + trivia)
        correct.style.border = 'solid green'
        result.style.color = 'red'
    }

    const button = buttonContainer.querySelectorAll('button');
    button.forEach(button => button.disabled = true)
    next.style.display = 'block'
}
window.addEventListener('keydown', function(e){
    console.log(e.code)
})
//shows the setting on quiz
const settingButton = document.getElementById('settingButton');
const settingOpen = document.getElementById('settingOpen')
settingButton.onclick = function(){
    settingOpen.classList.toggle('show')
}
document.addEventListener('click', function(e){
    if(!settingOpen.contains(e.target) && e.target !== settingButton){
        settingOpen.classList.remove('show');
    }
})
document.getElementById('close').onclick = () => settingOpen.classList.remove('show');

//deletes the previous question
function deletePrevious(){
    const buttonContainer = document.getElementById('button-container');
    const trivia = document.getElementById('p');
    buttonContainer.innerHTML = ' '
    trivia.innerHTML = ' '
}

const bgplay = document.getElementById('bgplay');
const musicSwitch = document.getElementById('music');
musicSwitch.addEventListener('change', function(){
    if(musicSwitch.checked){
        bgplay.play();
    }
    else{
        bgplay.pause();
    }
})

//go to the next question when clicked
document.getElementById('next').onclick = function(){
    deletePrevious();
    makeQuiz.request()
}

let makeQuiz = new Quiz();

makeQuiz.request();