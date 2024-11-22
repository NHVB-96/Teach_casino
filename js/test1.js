const correctAnswers = ["She is my classmate", "On the desk", "It's a pen"];
let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "Who's that?",
        options: ["I'm fine, thanks", "She is my classmate", "It's in the backpack"]
    },
    {
        question: "Where is the book?",
        options: ["On the desk", "In my bag", "Under the table"]
    },
    {
        question: "What is this?",
        options: ["It's a pencil", "It's a pen", "It's a ruler"]
    }
];

// DOM Elements
const questionElement = document.querySelector(".nieto-scoreboard-test-1 h3");
const options = document.querySelectorAll(".nieto-scoreboard-test-1 input[type='checkbox']");
const labels = document.querySelectorAll(".nieto-scoreboard-test-1 label");
const nextButton = document.querySelector(".next");
const background = document.querySelector(".nieto-scoreboard-test-1");
const newButton = document.querySelector(".next.new");

// Function to Load a New Question
function loadQuestion(index) {
    const currentData = questions[index];

    // Update the question text
    questionElement.textContent = currentData.question;

    // Update the labels with the options
    labels.forEach((label, i) => {
        label.textContent = currentData.options[i];
    });

    // Reset all checkboxes
    options.forEach((checkbox) => {
        checkbox.checked = false;

        checkbox.addEventListener("change", (event) => {
            if (event.target.checked) {
                // Uncheck all other checkboxes
                options.forEach((otherCheckbox) => {
                    if (otherCheckbox !== event.target) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
    background.style.backgroundColor = "rgb(42, 188, 144)";
    nextButton.style.display = "inline";
    newButton.style.display = "none";
}

// Event Listener for the Next Button
nextButton.addEventListener("click", () => {
    // Check if at least one checkbox is checked
    const checkedOption = Array.from(options).find(checkbox => checkbox.checked);

    if (!checkedOption) {
        // If no checkbox is checked, show an alert and stop execution
        alert("Please select an answer before proceeding!");
        return;
    }

    // Verify if the selected answer is correct
    const selectedAnswer = checkedOption.nextElementSibling.textContent;
    if (selectedAnswer === correctAnswers[currentQuestion]) {
        score++;
        background.style.backgroundColor = "yellow";
    }
    else{
        background.style.backgroundColor = "red";
    }
    nextButton.style.display = "none";
    newButton.style.display = "inline";
    // Proceed to the next question or show the final score
});
newButton.addEventListener("click",() => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);

    } else {
        alert(`You've completed the test! Your final score is ${score}/${questions.length}`);
        currentQuestion = 0; // Reset to the first question
        score = 0; // Reset the score
        loadQuestion(currentQuestion);
    }

})

// Load the first question initially
loadQuestion(currentQuestion);


// Initial Load

