document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country").value;
  const terms = document.getElementById("terms").checked;

  let message = "";

  if (!name || !email || !phone || !password || !confirmPassword || !gender || !country || !terms) {
    message = "Please fill in all fields and accept the terms.";
  } else if (password !== confirmPassword) {
    message = "Passwords do not match.";
  } else {
    message = "Registration Successful !";
    document.getElementById("registrationForm").reset();
  }

  const messageEl = document.getElementById("message");
  messageEl.textContent = message;
  messageEl.style.color = message.includes("Successful") ? "green" : "red";
});
