const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));
const parsedUserName = JSON.parse(localStorage.getItem("newNameFromLs"));
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

"Hi there " +
  parsedUserName +
  "You have scored " +
  parsedUserScore[0] +
  " in creativity";
if (
  parsedUserScore[0] >= 5 &&
  parsedUserScore[1] >= 5 &&
  parsedUserScore[2] >= 5
) {
  resultDiv.textContent =
    "Hi there " +
    parsedUserName +
    "! You have scored " +
    parsedUserScore[0] +
    " in creativity , " +
    parsedUserScore[1] +
    " in resilience" +
    " and " +
    parsedUserScore[2] +
    " in diligence. You are clearly winning at life! Go get 'em kid!";
} else if (
  parsedUserScore[3] <= 5 &&
  parsedUserScore[4] <= 5 &&
  parsedUserScore[5] <= 5
) {
  resultDiv.textContent =
    "Hi there " +
    parsedUserName +
    "! You have scored " +
    parsedUserScore[3] +
    " in self-criticism, " +
    parsedUserScore[4] +
    " in perfectionism " +
    "and " +
    parsedUserScore[5] +
    " in incorrigibility. You are clearly winning at life! Go get 'em kid! ";
} else {
  resultDiv.textContent =
    "Hi there " +
    parsedUserName +
    "! You have scored " +
    parsedUserScore[0] +
    " in creativity, " +
    parsedUserScore[1] +
    " in resilience " +
    "and " +
    parsedUserScore[2] +
    " in diligence, " +
    parsedUserScore[3] +
    " in self-criticism, " +
    parsedUserScore[4] +
    " in perfectionism " +
    "and " +
    parsedUserScore[5] +
    " in incorrigibility. You have a great balance!";
}

// logique genial
// 1. If the positive traits all equal 5 or above, then congratulate the user on being awesome!
// 2. if the negative traits are more than 6 or more, then encouraging the user.
