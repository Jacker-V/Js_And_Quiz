
const questions = [
    {
        category: "Toán",
        question: "2+2 bằng mấy?",
        choices: ["4", "5"],
        answer: "4"
    },
    {
        category: "Thăm dò",
        question: "Em đang làm gì á",
        choices: ["Ghét anh", "Nhớ anh"],
        answer: "Nhớ anh"
    },
    {
        category: "Chuẩn bị",
        question: "Em đang dỗi anh khum ?",
        choices: ["Cút đi cho khuất mắt bà", "Hết dỗi, nhớ anh ùi"],
        answer: "Hết dỗi, nhớ anh ùi"
    },
    {
        category: "Tấn công",
        question: "Em có chích anh khum ?",
        choices: ["Khum", "Cóa ẹ"],
        answer: "Cóa ẹ"
    },
    {
        category: "Chốt sổ",
        question: "Thế anh thơm em nhé !",
        choices: ["Khum", "Dẹ"],
        answer: "Dẹ"
    }
];

function getRandomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "✅ The computer's choice is correct!";
    } else {
        return `❌ The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}

let currentQuestion;

function renderQuestion() {
    currentQuestion = getRandomQuestion(questions);
    document.getElementById('category').textContent = `Bộ câu hỏi chữa dỗi người thương: ${currentQuestion.category}`;
    document.getElementById('question').textContent = currentQuestion.question;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const div = document.createElement('div');
        div.className = 'choice';
        div.onclick = play();
        div.textContent = choice;
        choicesDiv.appendChild(div);
    });

    document.getElementById('result').textContent = '';
}

function play() {
    const computerChoice = getRandomComputerChoice(currentQuestion.choices);
    const result = getResults(currentQuestion, computerChoice);
    document.getElementById('result').textContent = `Người thương chọn: "${computerChoice}"\n${result}`;
    setTimeout(renderQuestion, 3000);
    console.log(2);
    
    
}

// Khởi động lần đầu
renderQuestion();