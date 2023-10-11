const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));
pastCharts = JSON.parse(localStorage.getItem("pastChartsFromLs"));
pastUsers = JSON.parse(localStorage.getItem("pastUsersFromLs"));
const ctx = document.getElementById("myChart");
let dataSetsList = [];

for (i = 0; i < pastCharts.length; i++) {
  dataSetsList.push({
    label: pastUsers[i],
    data: pastCharts[i],
    fill: true,
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
  options: {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  },

  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
