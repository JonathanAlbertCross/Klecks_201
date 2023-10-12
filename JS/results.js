const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));
const parsedUserName = JSON.parse(localStorage.getItem("userNameFromLs"));
pastCharts = JSON.parse(localStorage.getItem("pastChartsFromLs"));
pastUsers = JSON.parse(localStorage.getItem("pastUsersFromLs"));
const ctx = document.getElementById("myChart");
let dataSetsList = [];
const backBtn = document.querySelector("#backBtn");
const resetBtn = document.querySelector("#resetBtn");
backBtn.addEventListener("click", function () {
  window.location = "./";
});
if (!pastCharts) {
  const noData = document.querySelector("#nodata");
  noData.textContent = "No data yet, please finish your test first!";
}
resetBtn.addEventListener("click", function () {
  localStorage.clear();
  window.location = "./";
});

for (i = 0; i < pastCharts.length; i++) {
  dataSetsList.push({
    label: pastUsers[i],
    data: pastCharts[i],
  });
}

let data = {
  labels: [
    "Creative",
    "Resilient",
    "Diligent",
    "Self-critical",
    "Perfectionist",
    "Incorrigible",
  ],
  datasets: dataSetsList,
};
const config = new Chart(ctx, {
  type: "radar",
  data: data,
  options: {
    scales: {
      r: {
        min: 0,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});

const resultDiv = document.getElementById("resultDiv");
// set messageDiv text

resultDiv.textContent = 'test'

function displayTextResult() {

  // if ()
  resultDiv.textContent = 'Hi there ' + parsedUserName + ". You have scored: " + parsedUserScore[0] + " in creativity, " + parsedUserScore[1] + " in resilience, and " + parsedUserScore[2] + " in diligence. You have also scored " + parsedUserScore[3] + " in self-criticism, " + parsedUserScore[4] + " in perfectionism, and " + parsedUserScore[5] + " in incorrigibility."
  let resultPara = document.createElement('p')
  resultDiv.appendChild(resultPara)

if (
  parsedUserScore[0] >= 5 &&
  parsedUserScore[1] >= 5 &&
  parsedUserScore[2] >= 5
) {
 resultPara.textContent =
    "You are armed with the ability and drive to make life what you will. Your creativity is complemented by a durable sense of purpose and a strong work ethic.";
} 

else if (
  parsedUserScore[3] >= 3 || 
  parsedUserScore[4] >= 3 &&
  parsedUserScore[5] >= 2 

) {
 resultPara.textContent = "You also scored highly in perfectionism and self-criticism. While you have great potential, this over-exacting nature can inhibit your ability to participate fully in professional and social scenarios."

}
}

// logique genial
// 1. If the positive traits all equal 5 or above, then congratulate the user on being awesome!
// 2. if the negative traits are more than 6 or more, then encouraging the user.


  


displayTextResult()
