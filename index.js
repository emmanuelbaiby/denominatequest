
var part=0;
if (part==0){
    // to asign the title and change it after tclicking start
var title = document.getElementById("title");
if (title){
    title.innerText ="DenominateQuest";
}
var description = document.getElementById("describtion");
if (description){
    description.innerText ="Discover your spiritual identity in  DenominateQuest! Navigate through quick, insightful questions to unveil the Christian denomination that resonates with your beliefs. Embark on a personalized journey of faith exploration.";
}

}

var part = 0;
var points = 0;

document.getElementById("start").addEventListener('click', function() {
    part = 0; // Reset part to start from the beginning
    points = 0; // Reset points
    nextQuestion();
});

function nextQuestion() {
    if (part < denominationalQuestions.length) {
        const question = denominationalQuestions[part];

        var questions = document.getElementById("questions");
        var title = document.getElementById("title");
        var description = document.getElementById("describtion");

        if (questions) {
            questions.innerText = "Question " + (part + 1) + "/10";
        }
        if (title) {
            title.innerText = question.question;
        }
        if (description) {
            description.innerText = "";
        }

        for (let i = 1; i <= 4; i++) {
            var choise = document.getElementById("choise" + i);
            if (choise) {
                choise.innerHTML = `<button class="choises" id="choises${i}" class="button_choices">${question.choices[i - 1]}</button>`;
                choise.addEventListener('click', handleChoiceAndNext);
            }
        }

        part++;
    } else {
        displayResult(); // Display the result after all questions
    }
}

function handleChoiceAndNext() {
    var choice = parseInt(this.id.slice(-1));
    handleChoice(choice);
    nextQuestion(); // Move to the next question after handling the choice
}

function handleChoice(choice) {
    switch (choice) {
        case 1:
            points += 4;
            break;
        case 2:
            points += 3;
            break;
        case 3:
            points += 2;
            break;
        case 4:
            points += 1;
            break;
    }
}

function displayResult() {
    // Display or process the result at the end of the quiz
    var interpretation = "";

    if (points >= 30 && points <= 40) {
        interpretation = "This range may suggest an alignment with Reformed or Calvinist traditions, emphasizing specific theological doctrines and a particular view of salvation.";
    } else if (points >= 25 && points <= 29) {
        interpretation = "This range could indicate an affinity with various mainstream Protestant denominations with a balanced and moderate theological stance.";
    } else if (points >= 20 && points <= 24) {
        interpretation = "This score might suggest an openness to diverse theological perspectives and could align with denominations that have a less rigid doctrinal structure.";
    } else if (points >= 15 && points <= 19) {
        interpretation = "This range may indicate an alignment with liturgical traditions such as the Roman Catholic Church or Orthodox Christianity, emphasizing sacraments and hierarchical structure.";
    } else {
        interpretation = "Unable to determine a specific interpretation for the given points.";
    }

    // Hide the question and choices
    var questions = document.getElementById("questions");
    var title = document.getElementById("title");
    var description = document.getElementById("describtion");

    if (questions) {
        questions.innerText = "";
    }
    if (title) {
        title.innerText = "Results";
    }
    if (description) {
        description.innerText = `${interpretation}`;
    }

    // Remove the choices
    for (let i = 1; i <= 4; i++) {
        var choise = document.getElementById("choise" + i);
        if (choise) {
            choise.innerHTML = "";
        }
    }

    // Optionally, you can add Bootstrap classes to hide elements
    var startButton = document.getElementById("start");
    if (startButton) {
        startButton.classList.add("d-none"); // Bootstrap class to hide the button
    }
}



const denominationalQuestions = [
    {
      question: "Salvation:",
      choices: ["A. Through faith alone.", "B. Through faith and works.", "C. Predestined by God.", "D. Through sacraments and good deeds."]
    },
    {
      question: "Bible Authority:",
      choices: ["A. Solely based on the Bible.", "B. Tradition alongside the Bible.", "C. Both the Bible and authoritative leaders.", "D. Authority of religious leaders, traditions, and scriptures."]
    },
    {
      question: "Nature of God:",
      choices: ["A. Trinitarian (Father, Son, Holy Spirit).", "B. Trinitarian with a unique emphasis.", "C. Non-trinitarian.", "D. Different concept of the divine."]
    },
    {
      question: "Nature of Jesus:",
      choices: ["A. Fully God and fully human.", "B. Emphasize humanity but acknowledge divinity.", "C. Christ as a great teacher or prophet, not divine.", "D. Unique view of Jesus' nature."]
    },
    {
      question: "Sacraments:",
      choices: ["A. Limited sacraments, e.g., baptism and communion.", "B. Multiple sacraments with significant importance.", "C. Rituals but not sacraments.", "D. Many sacraments with varying significance."]
    },
    {
      question: "Worship Style:",
      choices: ["A. Liturgical and formal.", "B. Varied, combining traditional and contemporary elements.", "C. Charismatic and expressive.", "D. Ritualistic and traditional."]
    },
    {
      question: "Authority Structure:",
      choices: ["A. Hierarchical structure with clear authority.", "B. Congregational autonomy.", "C. Episcopal structure (bishop-led).", "D. Synodal structure (council-led)."]
    },
    {
      question: "Nature of Humanity:",
      choices: ["A. Humans have free will.", "B. Emphasis on both free will and predestination.", "C. Total depravity and reliance on God's grace.", "D. Combination of good and evil within humans."]
    },
    {
      question: "Eschatology (End Times):",
      choices: ["A. Specific end-time scenario.", "B. Embrace diversity in interpreting end times.", "C. Downplay emphasis on specific end-time events.", "D. Distinct eschatological beliefs."]
    },
    {
      question: "Ecclesiology (Church Structure):",
      choices: ["A. Strong emphasis on the universal church.", "B. Balanced view of local and universal church.", "C. Local church autonomy.", "D. Special role for a visible hierarchical church."]
    }
  ];