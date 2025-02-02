document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("formMessage").textContent = "Please enter your name.";
    } else {
        document.getElementById("formMessage").textContent = `Thank you, ${name}!`;
    }
});
