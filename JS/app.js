// function userName() {
//   let intro = prompt("What is your name?");

//   alert("Hello " + intro);
// }
// userName();
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

const blot1 = new Blot("./images/rorschach-blot-1.jpeg", [
  ["bat", [0, 1, 0, 0, 1, 0]],
  ["moth", [0, 1, 0, 0, 0, 0]],
  ["butterfly", [0, 1, 0, 0, 0, 0]],
]);

const blot2 = new Blot("./images/rorschach-blot-1.jpeg", [
  ["bat", 0, 1, 1, 0, 0, 0],
  ["penis", 0, 0, 0, 0, 0, 1],
  ["house", 0, 1, 0, 0, 0, 0],
]);

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
inkblotarea.style.backgroundImage = `url("${blotList[0][0]}")`;

const button1 = document.querySelector("#button1");
button1.textContent = `${interpretationsBlot1[0]}`;
const button2 = document.querySelector("#button2");
button1.textContent = `${interpretationsBlot1[1]}`;
const button3 = document.querySelector("#button3");
button1.textContent = `${interpretationsBlot1[2]}`;
const skipbutton = document.querySelector("#skipbutton");

button1.addEventListener("click", function () {
  currentStep++;
  // add score to userScore
  // show new image

  // show new prompts
});

blot2.addToList();
blot1.addToList();
