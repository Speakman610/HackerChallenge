// Lists of words
const fruits = [
    'apple',
    'banana',
    'orange',
    'strawberry',
    'grape',
    'watermelon',
    'kiwi',
    'pineapple',
    'mango',
    'blueberry',
    'pear',
    'cherry',
    'plum',
    'peach',
    'raspberry',
    'blackberry',
    'lemon',
    'lime',
    'coconut',
    'pomegranate',
    'fig',
    'melon',
    'avocado',
    'apricot',
    'guava',
    'papaya',
    'nectarine',
    'lychee',
    'dragonfruit',
    'cantaloupe',
    'kiwifruit',
    'tangerine'
];

const vehicles = [
    'car',
    'boat',
    'bicycle',
    'train',
    'plane',
    'motorcycle',
    'bus',
    'truck',
    'scooter',
    'van',
    'helicopter',
    'submarine',
    'hovercraft',
    'skateboard',
    'jetski',
    'tractor',
    'moped',
    'rickshaw',
    'unicycle',
    'segway',
    'golfcart',
    'ambulance',
    'firetruck',
    'policecar',
    'spaceshuttle',
    'ferry',
    'zeppelin',
    'bulldozer',
    'dumptruck',
    'airballoon'
];

const challenges = [
    {
        onStart: () => {
            // Initialize self
            this.password = generateRandomPassword();
            this.title = "Challenge 1";
            this.description = "This first challenge should be easy. If you aren't sure what to do, try <em>inspecting</em> the page more closely, and the <em>console</em> might reveal the answer.";
            this.tooltip = "This is meant to be a learning experience, so if you get stuck on a challenge, please try to google what you might do to solve it using the key words in the challenge. For example, you could try googling \"How do I inspect a web page?\"";

            // Update elements
            document.getElementById('title').innerText = this.title;
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('tool-tip').innerText = this.tooltip;

            // Setup challenge
            console.log("Surely they won't know that the password is", this.password);
        },
        onSubmit: () => {
            const userAnswer = document.getElementById('answer').value;
            if (userAnswer === this.password) {
                // Log completion
                console.log(this.title + " solved!");
                return true;
            } else {
                console.error("Incorrect password.")
                return false;
            }
        }
    },
    {
        onStart: () => {
            // Initialize self
            this.password = generateRandomPassword();
            this.title = "Challenge 2";
            this.description = "Ready for the second challenge? The answer for the next challenge is nestled among the document's <em>elements</em>, it's like finding a needle in a haystack.";
            this.tooltip = "The console, typically found in web browsers' developer tools, is a text-based interface where developers can view and interact with information about a web page, including error messages, logs, and variable values.";

            // Update elements
            document.getElementById('title').innerHTML = this.title + "<p id=\"password\" style=\"display: none;\">" + this.password + "</p>";
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('tool-tip').innerText = this.tooltip;
        },
        onSubmit: () => {
            const userAnswer = document.getElementById('answer').value;
            if (userAnswer === this.password) {
                // Log completion
                console.log(this.title + " solved!");
                return true;
            } else {
                console.error("Incorrect password.")
                return false;
            }
        }
    },
    {
        onStart: () => {
            // Initialize self
            this.password = generateRandomPassword();
            this.title = "Challenge 3";
            this.description = "The password for this challenge is <em>" + this.password + "</em>, but the submit button isn't working... Is there a way to change that in the <em>elements</em> for the page?";
            this.tooltip = "Using the developer's tools, anyone can edit the style, functionality, and content of an element in a web page.";

            // Update elements
            document.getElementById('title').innerText = this.title;
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('tool-tip').innerText = this.tooltip;

            // Setup challenge
            document.getElementById('submit').disabled = true;
        },
        onSubmit: () => {
            const userAnswer = document.getElementById('answer').value;
            if (userAnswer === this.password) {
                // Log completion
                console.log(this.title + " solved!");
                return true;
            } else {
                console.error("Incorrect password.")
                return false;
            }
        }
    },
    {
        onStart: () => {
            // Initialize self
            this.password = generateRandomPassword();
            this.title = "Challenge 4";
            this.description = "In order to solve this challenge, you will need to combine everything you have learned up to this point. If it helps, here is the password: <em>" + this.password + "</em>";
            this.tooltip = "Often, the console is used to log error messages and to give developers an insight as to what might be going wrong.";

            // Update elements
            document.getElementById('title').innerText = this.title;
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('tool-tip').innerText = this.tooltip;

            // Setup challenge
            document.getElementById('submit').style.backgroundColor = "#ff7b00";
            document.getElementById('submit').innerText = "Delete"
        },
        onSubmit: () => {
            const userAnswer = document.getElementById('answer').value;

            if (document.getElementById('submit').innerText != "Submit") {
                console.error("Incorrect button text. Expected \"Submit\" but got \"" + document.getElementById('submit').innerText + "\" instead.");
                document.getElementById('answer').value = '';
                return false;
            }

            if (document.getElementById('submit').style.backgroundColor != "rgb(0, 123, 255)") {
                console.error("Incorrect button color. Expected \"rgb(0, 123, 255)\" but got \"" + document.getElementById('submit').style.backgroundColor + "\" instead.");
                return false;
            }

            if (userAnswer === this.password) {
                // Log completion
                console.log(this.title + " solved!");
                return true;
            } else {
                console.error("Incorrect password.")
                return false;
            }
        }
    },
    {
        title: "Congratulations!!!",
        description: "You completed all of my challenges!",
        password: null,
        onStart: () => {
            // Initialize self
            this.title = "Congratulations!!!";
            this.description = "You completed all of my challenges!";
            this.password = null;

            // Update elements
            document.getElementById('title').innerText = this.title;
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('tool-tip').innerText = '';
            document.getElementById('answer').style.display = 'none';
            document.getElementById('submit').innerText = "Reset Challenges";
        },
        onSubmit: () => {
            location.reload();
            localStorage.setItem("progress", 0);
            return false;
        }
    },
];

const totalChallenges = challenges.length - 1;
let current = localStorage.getItem("progress") || 0;
current = current >= challenges.length ? 0 : current;

let challenge = challenges[current];
challenge.onStart();

document.getElementById('completed').innerText = "(" + current + " out of " + totalChallenges + " complete)";

function submitAnswer() {
    if (challenge.onSubmit()) {
        generateConfetti(); // Display confetti on correct answer
        current++;
        challenge = challenges[current];
        localStorage.setItem("progress", current);
        challenge.onStart();
        document.getElementById('answer').value = '';
        document.getElementById('completed').innerText = "(" + current + " out of " + totalChallenges + " complete)";
    }
}

// Function to generate a random 2-word password
function generateRandomPassword() {
    // Get a random index from each list
    const randomIndex1 = Math.floor(Math.random() * fruits.length);
    const randomIndex2 = Math.floor(Math.random() * vehicles.length);

    // Get a random word from each list using the random index
    const randomWord1 = fruits[randomIndex1];
    const randomWord2 = vehicles[randomIndex2];
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Combine the two words to form the password
    const password = randomWord1 + randomWord2 + randomNumber;

    return password;
}

// Function to generate confetti
function generateConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Varying animation duration for each piece
        // confetti.style.animationDelay = Math.random() * 5 + 's';

        // Set a random color for each confetti piece
        confetti.style.backgroundColor = randomColor();

        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation ends
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Function to generate a random color
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function setCookie(name,value,days) {
    var domain = location.host
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getDate() + days);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=" + domain + ";";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
}

