// asking for name with a form
// get form field
const nameForm = document.getElementById("nameForm");
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
  ["chicken", [1, 0, 0, 0, 0, 0]],
  ["penis", [0, 1, 0, 0, 0, 0]],
  ["house", [0, 0, 1, 0, 0, 0]],
]);
blot1.addToList();
const blot2 = new Blot("./images/blots/rorschach-blot-2.jpeg", [
  ["chicken2", [1, 0, 0, 0, 0, 0]],
  ["penis2", [0, 1, 0, 0, 0, 0]],
  ["house2", [0, 0, 1, 0, 0, 0]],
]);
blot2.addToList();
const blot3 = new Blot("./images/blots/rorschach-blot-3.jpeg", [
  ["chicken3", [1, 0, 0, 0, 0, 0]],
  ["penis3", [0, 1, 0, 0, 0, 0]],
  ["house3", [0, 0, 1, 0, 0, 0]],
]);
blot3.addToList();

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
  const inkblotArea = document.querySelector("#inkblotarea");
  inkblotArea.style.backgroundImage = `url("${blotList[currentlyDisplayedBlot].src}")`;
  // show options for current blot on buttons
  const button1 = document.querySelector("#button1");
  button1.textContent = `${blotList[currentlyDisplayedBlot].options[0][0]}`;
  const button2 = document.querySelector("#button2");
  button2.textContent = `${blotList[currentlyDisplayedBlot].options[1][0]}`;
  const button3 = document.querySelector("#button3");
  button3.textContent = `${blotList[currentlyDisplayedBlot].options[2][0]}`;
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

// Add a skip button
const skipButton = document.getElementById("skipButton");

// Skip button event listener
skipButton.addEventListener("click", function () {
  // Move to the next inkblot without adding scores
  currentlyDisplayedBlot++;
  // Update content with the next inkblot
  updateContent();
});
