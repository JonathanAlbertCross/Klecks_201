//function renderChart ()

<<<<<<< HEAD
<<<<<<< HEAD
const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));

=======
>>>>>>> 8cc9a64 (fixed merge conflicts)
=======
const parsedUserScore = JSON.parse(localStorage.getItem("userScoreFromLs"));

>>>>>>> 46730c7 (fixed conflict)
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
<<<<<<< HEAD
<<<<<<< HEAD
      data: parsedUserScore,
=======
      data: [1, 2, 3, 4, 5, 6],
>>>>>>> 8cc9a64 (fixed merge conflicts)
=======
      data: parsedUserScore,
>>>>>>> 46730c7 (fixed conflict)
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
