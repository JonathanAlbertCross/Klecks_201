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
