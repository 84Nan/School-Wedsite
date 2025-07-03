document.addEventListener("DOMContentLoaded", () => {
  const announcements = [
    "🎓 Mid-term exams start from 15th July.",
    "📢 Parent-Teacher Meeting scheduled for 20th July.",
    "🏆 Annual Sports Day on 30th July. Join us!"
  ];

  const list = document.getElementById("announcement-list");

  announcements.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});