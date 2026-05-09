const moodCounts = {
  happy: 0,
  neutral: 0,
  sad: 0,
  angry: 0,
  excited: 0
};

const moodChart = new Chart(document.getElementById('moodChart'), {
  type: 'bar',
  data: {
    labels: ['😊 Happy', '😐 Neutral', '😢 Sad', '😠 Angry', '🥳 Excited'],
    datasets: [{
      label: 'Class Mood Count',
      data: Object.values(moodCounts),
      backgroundColor: ['#ffd93b', '#cfcfcf', '#7ec8e3', '#ff6b6b', '#9dff8a']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
stepSize: 1
        }
      }
    }
  }
});

function voteMood(mood) {
  moodCounts[mood]++;
  moodChart.data.datasets[0].data = Object.values(moodCounts);
  moodChart.update();

  const buttons = document.querySelectorAll('.emoji-buttons button');
  buttons.forEach(btn => {
    if (btn.innerText.includes(moodEmoji(mood))) {
      btn.classList.add('pop-effect');
      setTimeout(() => btn.classList.remove('pop-effect'), 300);
    }
  });
}

function moodEmoji(mood) {
  const emojiMap = {
    happy: "😊",
    neutral: "😐",
    sad: "😢",
    angry: "😠",
    excited: "🥳"
  };
 return emojiMap[mood];
}