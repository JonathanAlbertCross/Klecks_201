//function renderChart ()

const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));
const parsedUserName = JSON.parse(localStorage.getItem("userNameFromLs"));

const data = {
  labels: [
    "Creative",
    "Resilient",
    "Diligent",
    "Self-critical",
    "Perfectionist",
    "Incorrigible",
  ],
  datasets: [
    {
      label: `Results for ${parsedUserName}`,
      data: parsedUserScore,
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};
const ctx = document.getElementById("myChart");
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
