const quizData = [
    {
        question: "An essential field which is central to Artificial Intelligence research is?",
        a: "Compilation",
        b: "Art",
        c: "Knowledge engineering",
        d: "Mastering",
        correct: "c",
    },
    {
        question: "The study of computer algorithms that improve automatically through experience is termed?",
        a: "Compilation",
        b: "Formulation",
        c: "Ability",
        d: "Machine learning",
        correct: "d",
    },
    {
        question: "An evolved definition of Artificial Intelligence led to a phenomenon known as the",
        a: "Unsupervised learning",
        b: "Optimization",
        c: "Inclination",
        d: "Mobilising",
        correct: "a",
    },
    {
        question: " Which of these is a tool used in Artificial Intelligence?",
        a: "Art ",
        b: "Design",
        c: "Input",
        d: " Neural networks",
        correct: "d",
    },
    {
        question: "Which of the following is a fundamental goal of research in Artificial Intelligence?",
        a: "Reasoning",
        b: "Coupling",
        c: "Mastering",
        d: "Data",
        correct: "a",
    },
    {
        question: "The intelligence displayed by humans and other animals is termed?",
        a: "Constance",
        b: "Ability",
        c: "Naturlal Intelligence ",
        d: "Cognition",
        correct: "c",
    },
    {
        question: "Which of these is a field that is closely related to AI?",
        a: "Wiring ",
        b: "Mathematics",
        c: "Drawing",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "In what year was Artificial intelligence founded as an academic discipline?",
        a: "1990",
        b: "1956",
        c: "1912",
        d: "1909",
        correct: "b",
    },
    {
        question: "Any device that perceives its environment and takes actions that maximize its chance of success at some goal is termed?",
        a: "Input",
        b: "Intelligent agent",
        c: "Data ",
        d: "Processor ",
        correct: "b",
    },
    {
        question: "The ability to find patterns in a stream of input is referred to as?",
        a: "Unsupervised learning",
        b: "Optimization",
        c: "Inclination",
        d: "Mobilising",
        correct: "a",
    },




];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})