// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message || !emailRegex.test(email)) {
    alert("Please fill in all fields with valid information.");
    e.preventDefault();
  } else {
    alert("Message sent successfully!");
  }
});

// To-Do List Functionality
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = () => li.remove();
  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
