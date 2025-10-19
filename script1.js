
    window.onload = function () {
      alert("Welcome to AMAKON – Your One Stop Shopping Destination!");
    };

   
    document.querySelector("form").addEventListener("submit", function (event) {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!username || !password || !email) {
        alert("Please fill in all fields!");
        event.preventDefault();
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
      } else {
        alert("Form submitted successfully!");
      }
    });

   


