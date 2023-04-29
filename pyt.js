const quizData = [
    {
        question: "What is a correct syntax to output ' Hello World ' in Python?",
        a: "print('Hello World')",
        b: "Console.Writeln('Hello World')",
        c: "print('Hello World')",
        d: "System.out.println'Hello World'",
        correct: "a",
    },
    {
        question: "Which one is NOT a legal variable name?",
        a: "my_var",
        b: "_myvar",
        c: "Myvar",
        d: "my-var",
        correct: "d",
    },
    {
        question: "What is the correct file extension for Python files?",
        a: ".pt",
        b: ".pyt",
        c: ".py",
        d: ".pyth",
        correct: "c",
    },
    {
        question: "What is the correct syntax to output the type of a variable or object in Python?",
        a: "print(type(x))  ",
        b: "print(typeOf(x))",
        c: "print(typeof(x))",
        d: "print(typeof x)",
        correct: "a",
    },
    {
        question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
        a: "len()",
        b: "strip()",
        c: "ptrim()",
        d: "trim()",
        correct: "b",
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        a: "toUpperCase()",
        b: "uppercase()",
        c: "upper()  ",
        d: "upperCase()",
        correct: "c",
    },
    {
        question: "Which method can be used to replace parts of a string?",
        a: "replaceString()  ",
        b: "switch()",
        c: "replace()  ",
        d: "repl()",
        correct: "c",
    },
    {
        question: "Which operator is used to multiply numbers?",
        a: "*",
        b: "%",
        c: "+",
        d: "x",
        correct: "a",
    },
    {
        question: "Which collection is ordered, changeable, and allows duplicate members?",
        a: "DICTIONARY",
        b: "SET",
        c: "TUPLE ",
        d: "LIST  ",
        correct: "d",
    },
    {
        question: "How do you start writing a while loop in Python?",
        a: "while (x > y)",
        b: "x > y while {",
        c: "while x > y:  ",
        d: "while x > y {",
        correct: "c",
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