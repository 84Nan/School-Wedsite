document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admissionForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const admittedInto = document.getElementById('admittedInto').value;
    const previousClass = document.getElementById('previousClass').value;
    const marks = document.getElementById('marks').value;

    console.log('Admission Form Submission:', {
      studentName,
      admittedInto,
      previousClass,
      marks
    });

    alert(`Admission form submitted for ${studentName}. (In a real system, this goes to admin)`);

    form.reset();
  });
});
