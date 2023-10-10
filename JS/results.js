const ctx = document.getElementById("myChart");
const config = new Chart(ctx, {
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
