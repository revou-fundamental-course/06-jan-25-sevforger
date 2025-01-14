// responsifitas mobile 
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Tambahkan event listener untuk toggle menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// waktu skrg
document.getElementById("currentTime").innerText = new Date().toLocaleString();

// submit form
const form = document.getElementById("messageForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // ambil data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // tampilan data
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputDob").innerText = dob;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputMessage").innerText = message;
});