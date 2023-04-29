const quizData = [
    {
        question: "What is a correct syntax to output ' Hello World ' in Java?",
        a: "echo('Hello World')",
        b: "Console.Writeln('Hello World')",
        c: "print('Hello World')",
        d: "System.out.println'Hello World'",
        correct: "d",
    },
    {
        question: "Which data type is used to create a variable that should store text?",
        a: "string",
        b: "String",
        c: "Txt",
        d: "myString",
        correct: "b",
    },
    {
        question: "To declare an array in Java, define the variable type with:",
        a: "[]",
        b: "{}",
        c: "()",
        d: "<>",
        correct: "a",
    },
    {
        question: "Array indexes start with:",
        a: "0",
        b: "1",
        c: "2",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        a: "num x = 5",
        b: "int x = 5;  ",
        c: "x = 5;",
        d: "float x = 5;",
        correct: "b",
    },
    {
        question: "Which method can be used to find the length of a string?",
        a: "len()",
        b: "length()",
        c: "getLength()",
        d: "getSize()",
        correct: "b",
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        a: "toUpperCase()  ",
        b: "tuc()",
        c: "upperCase()",
        d: "touppercase()",
        correct: "a",
    },
    {
        question: "Which operator can be used to compare two values?",
        a: "<>",
        b: "><",
        c: "=",
        d: "== ",
        correct: "d",
    },
    {
        question: "How do you call a method in Java?",
        a: "methodName;",
        b: "(methodName);",
        c: "methodName();  ",
        d: "methodName[];",
        correct: "c",
    },
    {
        question: "Which keyword is used to create a class in Java?",
        a: "class()",
        b: "className",
        c: "class",
        d: "MyClass",
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