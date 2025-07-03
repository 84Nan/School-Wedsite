document.addEventListener("DOMContentLoaded", () => {
  const faculty = [
    "Mr. A. Kumar – Principal",
    "Ms. S. Nair – Head of Science Department",
    "Mr. R. Mehta – Math Teacher (High School)",
    "Ms. L. Das – English Teacher (Middle School)"
  ];

  const list = document.createElement("ul");
  faculty.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });

  const facultySection = document.querySelector(".faculty");
  facultySection.appendChild(list);
});