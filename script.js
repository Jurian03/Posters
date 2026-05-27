function updateLeaderboard() {
  const data = {
    Trombone: 0,
    Trompet: 0,
    Saxofoon: 0,
    Ritme: 0
  };

  Object.values(state).forEach(s => {
    if (data[s.status] !== undefined) {
      data[s.status]++;
    }
  });

  const total = Math.max(...Object.values(data), 1);

  const sorted = Object.entries(data)
    .sort((a, b) => b[1] - a[1]);

  sorted.forEach((item, index) => {
    const name = item[0];
    const count = item[1];
    const percent = (count / total) * 100;

    const key = name.toLowerCase();

    const countEl = document.getElementById("lb-" + key);
    const barEl = document.getElementById("bar-" + key);
    const row = document.getElementById("lb-" + key + "-row");

    if (countEl) countEl.textContent = count;
    if (barEl) barEl.style.width = percent + "%";
    if (row) {
      row.querySelector(".rank").textContent = "#" + (index + 1);
    }
  });
}