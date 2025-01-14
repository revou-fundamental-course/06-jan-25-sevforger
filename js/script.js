// user greeting 
function ubahNama(){
    let nama = prompt("What is Your Name?", "");
    document.getElementById("user-greeting").innerHTML = nama
}

ubahNama()

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

// slide foto 
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    slides.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
