// asking for name with a form
// get form field
const nameForm = document.getElementById("nameForm");
const inkblotArea = document.querySelector("#inkblotarea");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // set name
  const name = document.getElementById("name").value;
  // get messageDiv in HTML
  const messageDiv = document.getElementById("messageDiv");
  // set messageDiv text
  messageDiv.textContent = "Hi there, " + name + "!";
  // Reset the form
  nameForm.reset();
});

// empty userScore and blotList for first round
let userScore = [0, 0, 0, 0, 0, 0];
let blotList = [];
// select first blot (0 in blotList array) for first round
let currentlyDisplayedBlot = 0;

// Blot constructor to create Blots
function Blot(src, options) {
  this.src = src;
  this.options = options;
}

// Adding Blots to blotList array
Blot.prototype.addToList = function () {
  blotList.push(this);
};

// Creating the blots with options and scores, then adding them to the blotList
const blot1 = new Blot("./images/blots/rorschach-blot-1.jpeg", [
  ["Bat", [1, 0, 1, 0, 0, 1]],
  ["Butterfly", [0, 1, 0, 1, 1, 0]],
  ["Moth", [0, 1, 1, 0, 1, 0]],
]);
blot1.addToList();
const blot2 = new Blot("./images/blots/rorschach-blot-2.jpeg", [
  ["Humans", [1, 1, 0, 1, 0, 0]],
  ["Animals", [0, 1, 1, 0, 0, 1]],
  ["Airplane", [0, 0, 1, 0, 1, 1]],
]);
blot2.addToList();
const blot3 = new Blot("./images/blots/rorschach-blot-3.jpeg", [
  ["Dancers", [1, 0, 1, 0, 0, 1]],
  ["Rhino", [0, 1, 1, 1, 0, 0]],
  ["Inkblot", [0, 1, 1, 0, 1, 0]],
]);
blot3.addToList();

const blot4 = new Blot("./images/blots/rorschach-blot-4.jpeg", [
  ["Darth Vader", [1, 1, 1, 0, 0, 0]],
  ["Rug", [0, 1, 0, 1, 0, 1]],
  ["Cockroach", [1, 0, 1, 0, 1, 0]],
]);
blot4.addToList();

const blot5 = new Blot("./images/blots/rorschach-blot-5.jpeg", [
  ["Moth", [1, 0, 1, 1, 0, 0]],
  ["Bird", [0, 1, 1, 0, 0, 1]],
  ["Icarus", [1, 0, 1, 0, 1, 0]],
]);
blot5.addToList();

const blot6 = new Blot("./images/blots/rorschach-blot-6.jpeg", [
  ["Le Tour Eiffel", [1, 0, 1, 0, 1, 0]],
  ["The Eye of Sauron", [0, 1, 0, 1, 0, 1]],
  ["Anteater", [1, 0, 1, 0, 1, 0]],
]);
blot6.addToList();

const blot7 = new Blot("./images/blots/rorschach-blot-7.jpeg", [
  ["Rabbits", [1, 0, 1, 0, 0, 1]],
  ["Face", [0, 1, 0, 1, 1, 0]],
  ["Your Mum", [1, 0, 1, 0, 0, 1]],
]);
blot7.addToList();

const blot8 = new Blot("./images/blots/rorschach-blot-8.jpeg", [
  ["Blossom", [0, 0, 0, 1, 1, 1]],
  ["Big Cat", [0, 1, 1, 0, 1, 0]],
  ["Praying Mantis", [1, 0, 1, 0, 0, 1]],
]);
blot8.addToList();

const blot9 = new Blot("./images/blots/rorschach-blot-9.jpeg", [
  ["Desire", [0, 1, 1, 0, 0, 1]],
  ["Human", [1, 1, 0, 0, 1, 0]],
  ["Fire", [1, 0, 1, 1, 0, 0]],
]);
blot9.addToList();

const blot10 = new Blot("./images/blots/rorschach-blot-10.jpeg", [
  ["Daffodil", [0, 1, 0, 0, 1, 1]],
  ["Wishbone", [0, 1, 0, 0, 0, 0]],
  ["Crab", [1, 0, 1, 1, 0, 0]],
]);
blot10.addToList();

// const userTraits = [
//   "Creative",
//   "Resilient",
//   "Diligent",
//   "Self-Critical",
//   "Perfectionistic",
//   "Incorrigible",
// ];

// Changing the image and buttontext
function updateContent() {
  // show inkblot image in inkblotarea

  inkblotArea.style.backgroundImage = `url("${blotList[currentlyDisplayedBlot].src}")`;
  // show options for current blot on buttons
  const button1 = document.querySelector("#button1");
  button1.textContent = `${blotList[currentlyDisplayedBlot].options[0][0]}`;
  const button2 = document.querySelector("#button2");
  button2.textContent = `${blotList[currentlyDisplayedBlot].options[1][0]}`;
  const button3 = document.querySelector("#button3");
  button3.textContent = `${blotList[currentlyDisplayedBlot].options[2][0]}`;

  //test - CHANGE AFTER (make invisible class/css)
  if (currentlyDisplayedBlot === 2) {
    showResults.classList.toggle("invisible");
  }
}

const skipbutton = document.querySelector("#skipbutton");

// what happens when clicking on buttons
// button 1
button1.addEventListener("click", function () {
  // add score to userScore by adding the scores of the selected button in 1 current blot
  for (i = 0; i < userScore.length; i++) {
    userScore[i] =
      userScore[i] + blotList[currentlyDisplayedBlot].options[0][1][i];
  }
  //add 1 to current step
  currentlyDisplayedBlot++;
  //
  console.log("testing, testing 123");
  // show new image and buttontext
  updateContent();
});
// button 2
button2.addEventListener("click", function () {
  for (i = 0; i < userScore.length; i++) {
    userScore[i] =
      userScore[i] + blotList[currentlyDisplayedBlot].options[1][1][i];
  }
  currentlyDisplayedBlot++;
  updateContent();
});

// button 3
button3.addEventListener("click", function () {
  for (i = 0; i < userScore.length; i++) {
    userScore[i] =
      userScore[i] + blotList[currentlyDisplayedBlot].options[2][1][i];
  }
  currentlyDisplayedBlot++;
  updateContent();
});

// set image and buttontext for first round
updateContent();

function saveToLocalStorage() {
  const userScoreStringified = JSON.stringify(userScore);
  localStorage.setItem("userScoreFromLs", userScoreStringified);
}

const showResults = document.querySelector("#showResults");
showResults.addEventListener("click", function () {
  saveToLocalStorage();
});

// Add a skip button
const skipButton = document.getElementById("skipButton");

// Skip button event listener
skipButton.addEventListener("click", function () {
  // Move to the next inkblot without adding scores
  currentlyDisplayedBlot++;
  // Update content with the next inkblot
  updateContent();
});

const rotateBtn = document.getElementById("rotateBtn");
// rotate button event listener
rotateBtn.addEventListener("click", function () {
  inkblotArea.classList.toggle("rotate");
});
