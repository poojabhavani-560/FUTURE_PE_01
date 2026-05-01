// Booking Function
function bookAppointment() {
    let name = prompt("Enter your name:");
    let service = prompt("Enter service (Haircut / Facial / Makeup):");

    if (name && service) {
        alert("Thank you " + name + "! Your booking for " + service + " is confirmed.");
    } else {
        alert("Please enter valid details.");
    }
}

// Add click event to all CTA buttons
document.addEventListener("DOMContentLoaded", function () {
    let ctas = document.querySelectorAll(".cta");

    ctas.forEach(function(btn) {
        btn.addEventListener("click", bookAppointment);
    });
});

// Dynamic Greeting based on time
function setGreeting() {
    let headerText = document.querySelector("header p");
    let hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    headerText.innerText += " | " + greeting;
}

setGreeting();
