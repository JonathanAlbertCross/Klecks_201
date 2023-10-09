// Function to handle form submission
const nameForm = document.getElementById("nameForm");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.textContent = "Hi there, " + name + "!";
  // Reset the form
  nameForm.reset();
});

let userScore = [];
let blotList = [];
let currentStep = 0;

function Blot(src, options) {
  this.src = src;
  this.options = options;
}

Blot.prototype.addToList = function () {
  blotList.push(this);
};

const blot1 = new Blot("./images/blots/rorschach-blot-1.jpeg", [
  ["bat", [0, 1, 0, 0, 1, 0]],
  ["moth", [0, 1, 0, 0, 0, 0]],
  ["butterfly", [0, 1, 0, 0, 0, 0]],
]);
blot1.addToList();
const blot2 = new Blot("./images/blots/rorschach-blot-2.jpeg", [
  ["chicken", [0, 1, 1, 0, 0, 0]],
  ["penis", [0, 0, 0, 0, 0, 1]],
  ["house", [0, 1, 0, 0, 0, 0]],
]);
blot2.addToList();

const userTraits = [
  "Creative",
  "Resilient",
  "Diligent",
  "Self-Critical",
  "Perfectionistic",
  "Incorrigible",
];

// show inkblot image in inkblotarea
const inkblotarea = document.querySelector("#inkblotarea");
inkblotarea.style.backgroundImage = `url("${blotList[0].src}")`;

const button1 = document.querySelector("#button1");
button1.textContent = `${blotList[0].options[0][0]}`;
button2.textContent = `${blotList[0].options[1][0]}`;
button3.textContent = `${blotList[0].options[2][0]}`;

const skipbutton = document.querySelector("#skipbutton");

button1.addEventListener("click", function () {
  currentStep++;
  // add score to userScore
  // show new image

  // show new prompts
});
