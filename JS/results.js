//function renderChart ()

const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));

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
      label: "Results",
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
