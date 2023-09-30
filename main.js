const openButtons = document.querySelectorAll(".btn");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const form = document.querySelector("form");

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const textarea = document.getElementById("comment");

const charCounter = document.querySelector(".textarea_counter");
const submitButton = document.querySelector(".btn[type='submit']");
const consentCheckbox = document.querySelector("#consent");

function checkValidForms() {
    return !consentCheckbox.checked || textarea.value.trim() === "" || name.value.trim() === "" || surname.value.trim() === ""
}

openButtons.forEach((button) => {
    button.addEventListener("click", function () {
        popup.classList.remove("closed");
    });
});

overlay.addEventListener("click", function () {
    popup.classList.add("closed");
});

closeButton.addEventListener("click", function () {
    popup.classList.add("closed");
});

textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    charCounter.textContent = `Символов ${this.value.length}/360`;
});

form.addEventListener("submit", function (event) {
    if (checkValidForms()) {
        event.preventDefault();
        alert("Заполните все поля и дайте согласие на обработку данных.");
    }
});

// consentCheckbox.addEventListener("change", function () {
//     submitButton.disabled = checkValidForms();
// });

submitButton.disabled = true;

const formsDivID = ['name', 'surname', 'comment', 'consent'];
formsDivID.forEach(el => {
    document.getElementById(el).addEventListener('change', function () {
        submitButton.disabled = checkValidForms();
    });
});