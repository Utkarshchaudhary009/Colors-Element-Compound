var questions = [
    { compound: "Magnesium (Mg)", color: "Silver", colorCode: "#C0C0C0" },
    { compound: "Zinc (Zn)", color: "Silver", colorCode: "#C0C0C0" },
    { compound: "Iron (Fe)", color: "Gray", colorCode: "#808080" },
    { compound: "Carbon (C)", color: "Black", colorCode: "#000000" },
    { compound: "Lead (Pb)", color: "Gray", colorCode: "#808080" },
    { compound: "Silver (Ag)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Gold (Au)", color: "Yellow", colorCode: "#FFD700" },
    { compound: "Copper (Cu)", color: "Reddish-Brown", colorCode: "#B87333" },
    { compound: "Hydrogen Sulfide (H₂S)", color: "Colorless", colorCode: "black" },
    { compound: "Aluminium Sulfide (Al₂S₃)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Nitrogen Oxide (NO₂)", color: "Brown", colorCode: "#8B4513" },
    { compound: "Copper Oxide (CuO)", color: "Black", colorCode: "#000000" },
    { compound: "Magnesium Oxide (MgO)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Copper Sulfate (CuSO₄)", color: "Blue", colorCode: "#0000FF" },
    { compound: "Copper Chloride (CuCl₂)", color: "Green", colorCode: "#008000" },
    { compound: "Lead Oxide (PbO)", color: "Yellow", colorCode: "#FFFF00" },
    { compound: "Lead Nitrate (Pb(NO₃)₂)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Ferric Sulfate (Fe₂(SO₄)₃)", color: "Brown", colorCode: "#8B4513" },
    { compound: "Zinc Sulfate (ZnSO₄)", color: "Colorless", colorCode: "black" },
    { compound: "Glucose (C₆H₁₂O₆)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Aluminium Sulfate (Al₂(SO₄)₃)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Copper Oxide (CuO)", color: "Black", colorCode: "#000000" },
    { compound: "Calcium Carbonate (CaCO₃)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Calcium Hydroxide (Ca(OH)₂)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Silver Bromide (AgBr)", color: "Yellow", colorCode: "#FFFF00" },
    { compound: "Lead Chloride (PbCl₂)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Copper Sulfate (CuSO₄)", color: "Blue", colorCode: "#0000FF" },
    { compound: "Iron Sulfate (FeSO₄)", color: "Green", colorCode: "#008000" },
    { compound: "Zinc Sulfate (ZnSO₄)", color: "Colorless", colorCode: "black" },
    { compound: "Hydrogen Sulfate (H₂SO₄)", color: "Colorless", colorCode: "black" },
    { compound: "Sodium Nitrate (NaNO₃)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Silver Chloride (AgCl)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Silver Oxide (Ag₂O)", color: "Black", colorCode: "#000000" },
    { compound: "Silver Iodide (AgI)", color: "Yellow", colorCode: "#FFFF00" },
    { compound: "Red Mercury Chloride (Hg₂Cl₂)", color: "Red", colorCode: "#FF0000" },
    { compound: "Copper Nitrate (Cu(NO₃)₂)", color: "Blue", colorCode: "#0000FF" },
    { compound: "Barium Sulfate (BaSO₄)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Barium Chloride (BaCl₂)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Sodium Chloride (NaCl)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Hydrated Iron Oxide (Fe₂O₃·xH₂O)", color: "Brown", colorCode: "#8B4513" },
    { compound: "Copper Carbonate (CuCO₃)", color: "Green", colorCode: "#008000" },
    { compound: "Silver Sulfide (Ag₂S)", color: "Black", colorCode: "#000000" },
    { compound: "Silver Nitrate (AgNO₃)", color: "White", colorCode: "#FFFFFF" },
    { compound: "Copper Nitrate (Cu(NO₃)₂)", color: "Blue", colorCode: "#0000FF" },
    { compound: "Ammonium Chloride (NH₄Cl)", color: "White", colorCode: "#FFFFFF" }
];

// var questions = [
//     { compound: "Copper Oxide (CuO)", color: "Black", colorCode: "#000000" },
//     { compound: "Magnesium Oxide (MgO)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Copper Chloride (CuCl₂)", color: "Green", colorCode: "#008000" },
//     { compound: "Lead Oxide (PbO)", color: "Yellow", colorCode: "#FFFF00" },
//     { compound: "Lead Nitrate (Pb(NO₃)₂)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Ferric Sulfate (Fe₂(SO₄)₃)", color: "Brown", colorCode: "#8B4513" },
//     { compound: "Zinc Sulfate (ZnSO₄)", color: "Colorless", colorCode: "black" },
//     { compound: "Glucose (C₆H₁₂O₆)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Aluminium Sulfate (Al₂(SO₄)₃)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Calcium Carbonate (CaCO₃)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Calcium Hydroxide (Ca(OH)₂)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Iron Sulfate (FeSO₄)", color: "Green", colorCode: "#008000" },
//     { compound: "Hydrogen Sulfate (H₂SO₄)", color: "Colorless", colorCode: "black" },
//     { compound: "Silver Chloride (AgCl)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Silver Oxide (Ag₂O)", color: "Black", colorCode: "#000000" },
//     { compound: "Barium Sulfate (BaSO₄)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Barium Chloride (BaCl₂)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Sodium Chloride (NaCl)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Silver Sulfide (Ag₂S)", color: "Black", colorCode: "#000000" },
//     { compound: "Silver Nitrate (AgNO₃)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Ammonium Chloride (NH₄Cl)", color: "White", colorCode: "#FFFFFF" }
// ];
// var level1 = [
//     { compound: "Magnesium (Mg)", color: "Silver", colorCode: "#C0C0C0" },
//     { compound: "Zinc (Zn)", color: "Silver", colorCode: "#C0C0C0" },
//     { compound: "Iron (Fe)", color: "Gray", colorCode: "#808080" },
//     { compound: "Carbon (C)", color: "Black", colorCode: "#000000" },
//     { compound: "Lead (Pb)", color: "Gray", colorCode: "#808080" }
// ];

// var level2 = [
//     { compound: "Copper (Cu)", color: "Reddish-Brown", colorCode: "#B87333" },
//     { compound: "Gold (Au)", color: "Yellow", colorCode: "#FFD700" },
//     { compound: "Silver (Ag)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Hydrogen Sulfide (H₂S)", color: "Colorless", colorCode: "black" },
//     { compound: "Aluminium Sulfide (Al₂S₃)", color: "White", colorCode: "#FFFFFF" }
// ];

// var level3 = [
//     { compound: "Nitrogen Oxide (NO₂)", color: "Brown", colorCode: "#8B4513" },
//     { compound: "Copper Sulfate (CuSO₄)", color: "Blue", colorCode: "#0000FF" },
//     { compound: "Copper Chloride (CuCl₂)", color: "Green", colorCode: "#008000" },
//     { compound: "Lead Oxide (PbO)", color: "Yellow", colorCode: "#FFFF00" },
//     { compound: "Magnesium Oxide (MgO)", color: "White", colorCode: "#FFFFFF" }
// ];

// var level4 = [
//     { compound: "Ferric Sulfate (Fe₂(SO₄)₃)", color: "Brown", colorCode: "#8B4513" },
//     { compound: "Silver Bromide (AgBr)", color: "Yellow", colorCode: "#FFFF00" },
//     { compound: "Lead Chloride (PbCl₂)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Hydrated Iron Oxide (Fe₂O₃·xH₂O)", color: "Brown", colorCode: "#8B4513" },
//     { compound: "Copper Carbonate (CuCO₃)", color: "Green", colorCode: "#008000" }
// ];
// var level5 = [
//     { compound: "Red Mercury Chloride (Hg₂Cl₂)", color: "Red", colorCode: "#FF0000" },
//     { compound: "Silver Iodide (AgI)", color: "Yellow", colorCode: "#FFFF00" },
//     { compound: "Copper Nitrate (Cu(NO₃)₂)", color: "Blue", colorCode: "#0000FF" },
//     { compound: "Barium Sulfate (BaSO₄)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Sodium Nitrate (NaNO₃)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Chromium Oxide (Cr₂O₃)", color: "Green", colorCode: "#006400" }, // New compound
//     { compound: "Potassium Dichromate (K₂Cr₂O₇)", color: "Orange", colorCode: "#FF4500" } // New compound
// ];
// var level6 = [
//     { compound: "Potassium Ferricyanide (K₃[Fe(CN)₆])", color: "Red", colorCode: "#FF0000" },
//     { compound: "Potassium Ferrocyanide (K₄[Fe(CN)₆])", color: "Yellow", colorCode: "#FFFF00" },
//     { compound: "Nickel Dimethylglyoxime [Ni(DMG)₂]", color: "Red", colorCode: "#FF4500" },
//     { compound: "Ammonium Hexachloroplatinate ((NH₄)₂[PtCl₆])", color: "Yellow", colorCode: "#FFD700" },
//     { compound: "Copper Tetraammine Complex ([Cu(NH₃)₄]²⁺)", color: "Blue", colorCode: "#0000FF" }
// ];
// var level7 = [
//     { compound: "Thorium Oxide (ThO₂)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Uranium Hexafluoride (UF₆)", color: "Colorless", colorCode: "black" },
//     { compound: "Plutonium Oxide (PuO₂)", color: "Yellow-Green", colorCode: "#ADFF2F" },
//     { compound: "Lanthanum Nitrate (La(NO₃)₃)", color: "White", colorCode: "#FFFFFF" },
//     { compound: "Cerium Oxide (CeO₂)", color: "Yellow", colorCode: "#FFFF00" }
// ];
// var level8 = [
//     { compound: "Manganese Dioxide (MnO₂)", color: "Black", colorCode: "#000000" },
//     { compound: "Chromium(VI) Oxide (CrO₃)", color: "Red", colorCode: "#DC143C" },
//     { compound: "Vanadium Pentoxide (V₂O₅)", color: "Yellow-Orange", colorCode: "#FF8C00" },
//     { compound: "Cobalt(II) Chloride (CoCl₂)", color: "Pink", colorCode: "#FFC0CB" },
//     { compound: "Titanium Dioxide (TiO₂)", color: "White", colorCode: "#FFFFFF" }
// ];
// var level9 = [
//     { compound: "Ferrocene (Fe(C₅H₅)₂)", color: "Orange", colorCode: "#FFA500" },
//     { compound: "Grignard Reagent (RMgX)", color: "Colorless", colorCode: "black" },
//     { compound: "Ziegler-Natta Catalyst (TiCl₄ + Al(C₂H₅)₃)", color: "Colorless", colorCode: "black" },
//     { compound: "Tetraphenylporphyrin (TPP)", color: "Purple", colorCode: "#800080" },
//     { compound: "Chlorophyll (C₅₅H₇₂O₅N₄Mg)", color: "Green", colorCode: "#008000" }
// ];
// const levels={
//     level1: level1,
//     level2: level2,
//     level3: level3,
//     level4: level4,
//     level5: level5,
//     level6: level6,
//     level7: level7,
//     level8: level8,
//     level9: level9
//   }

let score = 0;
let totalQuestions = 0;
let currentRoundQuestions = [];
let answeredQuestions = [];
let incorrectQuestions = [];
let correctCount = 0;
let highestScore = localStorage.getItem("highestScore") || 0;

// displayUserLevel(createQuestionArray());
let round=0
// UI Elements
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
let timer;

// Display highest score in the top-right corner
const scoreDisplay = document.createElement("div");
scoreDisplay.style.position = "absolute";
scoreDisplay.style.top = "10px";
scoreDisplay.style.right = "10px";
scoreDisplay.style.padding = "10px";
scoreDisplay.style.backgroundColor ="#ffffff"
scoreDisplay.style.border = "2px solid #84d6ee";
scoreDisplay.style.borderRadius = "10px";
scoreDisplay.style.fontFamily = "Arial, sans-serif";
scoreDisplay.style.fontSize = "20px";
scoreDisplay.style.fontWeight = "bold";
scoreDisplay.style.zIndex = "1000";
scoreDisplay.innerText = `High Score: ${highestScore}`;
document.body.appendChild(scoreDisplay);
// Function to display the user's level in the top-left corner

// function displayUserLevel(level) {
//     const levelDisplay = document.createElement('div');
//     levelDisplay.style.position = 'absolute';
//     levelDisplay.style.top = '10px';
//     levelDisplay.style.left = '10px';
//     levelDisplay.style.backgroundColor = '#333';
//     levelDisplay.style.color = '#fff';
//     levelDisplay.style.padding = '10px';
//     levelDisplay.style.borderRadius = '5px';
//     levelDisplay.style.fontFamily = 'Arial, sans-serif';
//     levelDisplay.style.fontSize = '16px';
//     levelDisplay.innerHTML = `${level}`;
//     document.body.appendChild(levelDisplay);
// }


// // Function to create the question array based on the highest score level
// function createQuestionArray() {
//     const level = Math.round((highestScore / 10)/10);
//     console.log(level)
//     for (let index = 2; index < level; index++) {
//         questions = questions.concat(levels[`level${index}`]);
//     }
//     return `Level: ${level}`; // Return the final array of questions

// }



// Shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

questions=shuffleArray(questions)
// Add toggleFullscreen function
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
function reloadPage() {
    location.reload();
}


var oldscore=0
// Add the animation class when updating the score
function updateScore() { 
    // displayUserLevel(createQuestionArray());
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highestScore", highestScore);
        scoreDisplay.innerText = `High Score: ${highestScore}`;
    }
    if (score !=oldscore) {
    scoreEl.textContent = `Score: ${score}`;
    scoreEl.classList.add('animate');
    setTimeout(() => {
        scoreEl.classList.remove('animate');
    }, 500); // Remove the animation class after 500ms
    oldscore=score}
    if (score==450){
        scoreDisplay.innerText = `At The First Peak ${highestScore}`;
        scoreEl.textContent = `You are greatest My Lord. Your are master of colors of Compounds.`;
    }
}

// Play sound effects
function playSound(effect) {
    const sound = document.getElementById(effect);
    sound.currentTime = 0;
    sound.play();
}
let mistakeTracker = localStorage.getItem("mistakeTracker");

// Parse it or initialize as an empty object if null
mistakeTracker = mistakeTracker ? JSON.parse(mistakeTracker) : {};

// Function to record a mistake
function recordMistake(element,colorCode) {
    if (mistakeTracker[element]) {
        mistakeTracker[element].count++;
    } else {
        // Add a new element with a random color
        mistakeTracker[element] = {
            count: 1,
            color: colorCode
        };
    }
}

// Save data to localStorage
function saveMistakeData() {
    localStorage.setItem("mistakeTracker", JSON.stringify(mistakeTracker));
}

// Update checkAnswer with sound effects
function checkAnswer(selectedColorCode, correctColorCode, question) {
    clearInterval(timer);

    updateProgressBar();
    if (selectedColorCode === correctColorCode) {
        playSound("correct-sound");
        correctCount++;
        score += 10;
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = correctColorCode === "#FFFFFF" ? "black" : correctColorCode;
        incorrectQuestions = incorrectQuestions.filter(q => q !== question);
    } else {
        playSound("wrong-sound");
        feedbackEl.textContent = `Wrong! The correct color is ${getColorNameFromCode(correctColorCode)}.`;
        feedbackEl.style.color = correctColorCode === "#FFFFFF" ? "black" : correctColorCode;
        recordMistake(question["compound"],question["colorCode"]);
        saveMistakeData()
        // console.log(question["compound"])
        if (!incorrectQuestions.includes(question)) {
            incorrectQuestions.push(question);
        }
    }
    updateScore()
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
}


// Modify the timer logic to change color when the time is running low
function startTimer() {
    let timeLeft = 10;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    timerEl.classList.remove('low-time'); // Reset the color

    clearInterval(timer); 
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = `Time Left: ${timeLeft}s`;

            // Change to red if time left is under 3 seconds
            if (timeLeft <= 3) {
                timerEl.classList.add('low-time');
            }
        } else {
            clearInterval(timer); // Stop the timer
            checkAnswer(null, currentRoundQuestions[currentQuestionIndex].colorCode, currentRoundQuestions[currentQuestionIndex]);
        }
    }, 1000);
}


// Start a new round
function startNewRound() {
    currentRoundQuestions = selectQuestionsForRound();
    if (currentRoundQuestions.length > 0) {
        currentQuestionIndex = 0;
        loadQuestion();
    } else {
        alert("No more questions available!");
        showScorecard();
    }
}

// Select questions for the current round
function selectQuestionsForRound() {
    const roundQuestions = [];
    questions=shuffleArray(questions)
    const availableQuestions = questions.filter(q => !answeredQuestions.includes(q));
    
    // Prioritize incorrect questions
    const prioritizedQuestions = shuffleArray(
        incorrectQuestions.filter(q => availableQuestions.includes(q))
    );

    // Fill the round with prioritized questions first
    while (roundQuestions.length < 5 && prioritizedQuestions.length > 0) {
        const q = prioritizedQuestions.pop();
        roundQuestions.push(q);
        answeredQuestions.push(q);
    }

    // Fill the rest with random questions
    while (roundQuestions.length < 5 && availableQuestions.length > 0) {
        const q = availableQuestions.pop();
        roundQuestions.push(q);
        answeredQuestions.push(q);
    }

    return shuffleArray(roundQuestions);
}

// Load a question
function loadQuestion() {
    if (currentQuestionIndex >= currentRoundQuestions.length) {
        showScorecard();
        return;
    }

    const q = currentRoundQuestions[currentQuestionIndex];
    if (!q) {
        console.error("Question data missing!");
        showScorecard();
        return;
    }

    questionEl.textContent = `What is the color of ${q.compound}?`;
    feedbackEl.textContent = "";
    feedbackEl.style.color = "";

    createOptions(q);
    startTimer();
}


// Create options for the current question
function createOptions(q) {
    optionsContainer.innerHTML = ""; 
    const correctColorCode = q.colorCode;
    const allColors = Array.from(new Set(questions.map(item => item.colorCode)));
    const options = [correctColorCode];

    // Add three random incorrect options
    while (options.length < 4) {
        const randomColorCode = allColors[Math.floor(Math.random() * allColors.length)];
        if (!options.includes(randomColorCode)) {
            options.push(randomColorCode);
        }
    }

    const shuffledOptions = shuffleArray(options);
    shuffledOptions.forEach((colorCode) => {
        const button = document.createElement("button");
        button.textContent = questions.find(q => q.colorCode === colorCode).color;
        button.classList.add("option");
        button.style.backgroundColor = colorCode;
        button.style.color = (colorCode == "#FFFFFF" || colorCode == "#FFFF00") ? "black" : "white";
        button.addEventListener("click", () => checkAnswer(colorCode, correctColorCode, q));
        optionsContainer.appendChild(button);
    });
}
function getColorNameFromCode(colorCode) {
    const question = questions.find(q => q.colorCode === colorCode);
    if (question) {
        return question.color;  // Return the color name associated with the colorCode
    } else {
        return null;  // Return null if the colorCode is not found
    }
}
function updateProgressBar(num=null) {
    if (num) {
    console.log(num);
    const progress = ((num) / currentRoundQuestions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    }else{
    console.log(currentQuestionIndex + 1)
    const progress = ((currentQuestionIndex + 1) / currentRoundQuestions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    return}
}
// Start the timer
// function startTimer() {
//     let timeLeft = 10; 
//     timerEl.textContent = `Time Left: ${timeLeft}s`;

//     clearInterval(timer); // Clear any existing timer to avoid multiple intervals
//     timer = setInterval(() => {
//         if (timeLeft > 0) {
//             timeLeft--;
//             timerEl.textContent = `Time Left: ${timeLeft}s`;
//         } else {
//             clearInterval(timer); // Stop the timer when it reaches zero
//             checkAnswer(null, currentRoundQuestions[currentQuestionIndex].colorCode, currentRoundQuestions[currentQuestionIndex]);
//         }
//     }, 1000);
// }

// Show the scoreboard with animation after round ends
function showScorecard() {
    round = round + 1;
    questionEl.textContent = "Round Complete!";
    optionsContainer.innerHTML = "";
    feedbackEl.textContent = "";
    timerEl.textContent = "";
    const scoreSummary = document.createElement("div");
    scoreSummary.innerHTML = `
        <p><strong>Round Score:</strong> ${correctCount}/${round}</p>
        <p><strong>Total Score:</strong> ${score}</p>
        <p><strong>Highest Score:</strong> ${highestScore}</p>
    `;
    optionsContainer.appendChild(scoreSummary);

    const nextRoundButton = document.createElement("button");
    nextRoundButton.textContent = "Start Next Round";
    nextRoundButton.addEventListener("click", startNewRound);
    optionsContainer.appendChild(nextRoundButton);

    // document.getElementById("score-box").style.display = 'block'; // Display the scoreboard
}

