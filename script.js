const roleSelect = document.getElementById("roleSelect");
const principalView = document.getElementById("principalView");
const teacherView = document.getElementById("teacherView");
const studentView = document.getElementById("studentView");

roleSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  principalView.style.display = role === "principal" ? "block" : "none";
  teacherView.style.display = role === "teacher" ? "block" : "none";
  studentView.style.display = role === "student" ? "block" : "none";
});

// Chart.js bar chart for Principal View
const ctx = document.getElementById('subjectOverviewChart').getContext('2d');
const subjectOverviewChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Math', 'Science', 'English', 'History'],
    datasets: [
      {
        label: 'Average',
        data: [78, 82, 74, 69],
        backgroundColor: 'rgba(0, 102, 204, 0.6)'
      },
      {
        label: 'Top',
        data: [98, 95, 92, 91],
        backgroundColor: 'rgba(0, 204, 102, 0.6)'
      },
      {
        label: 'Lowest',
        data: [45, 51, 39, 43],
        backgroundColor: 'rgba(204, 0, 0, 0.6)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// PDF Export: Teacher
function exportTeacherReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Class Performance Report", 20, 20);
  doc.text("Student A: Math - 88", 20, 30);
  doc.text("Student B: Math - 73", 20, 40);
  doc.text("Student C: Math - 95", 20, 50);
  doc.save("teacher_report.pdf");
}

// PDF Export: Student
function exportStudentReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Student Report Card", 20, 20);
  doc.text("Math: 88", 20, 30);
  doc.text("Class Average: 79", 20, 40);
  doc.text("Topper: 95", 20, 50);
  doc.text("Rank: Subject - 3rd | Overall - 4th", 20, 60);
  doc.save("student_report.pdf");
}
