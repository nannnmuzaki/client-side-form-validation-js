const form = document.querySelector("#registrationForm");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const countryInput = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const zipInput = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const zipRegex = {
    US: "^\\d{5}(?:-\\d{4})?$",
    UK: "^[A-Za-z]{1,2}\\d[A-Za-z\\d]? ?\\d[A-Za-z]{2}$",
};

["input", "blur"].forEach((event) => {
    emailInput.addEventListener(event, () => {
        if (emailInput.validity.valueMissing) {
            emailError.textContent =
                "Email input must be filled with valid email address";
            emailError.classList.add("active");
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent =
                "Please fill it with a valid email address (example: john@gmail.com)";
            emailError.classList.add("active");
        } else {
            emailError.textContent = "";
            emailError.classList.remove("active");
        }
    });

    countryInput.addEventListener(event, () => {
        if (countryInput.validity.valueMissing) {
            countryError.textContent =
                "Please select one of the country options";
            countryError.classList.add("active");
        } else {
            countryError.textContent = "";
            countryError.classList.remove("active");

            zipInput.setAttribute("pattern", zipRegex[countryInput.value]);
        }
    });

    zipInput.addEventListener(event, () => {
        const isUS = countryInput.value === "US";

        if (zipInput.validity.valueMissing) {
            zipError.textContent = isUS
                ? "Postal Code must be filled with a valid US postal code"
                : "Postal Code must be filled with a valid UK postal code";
            zipError.classList.add("active");
        } else if (zipInput.validity.patternMismatch) {
            zipError.textContent = isUS
                ? "Please fill it with your valid US postal code"
                : "Please fill it with your valid UK postal code";
            zipError.classList.add("active");
        } else {
            zipError.textContent = "";
            zipError.classList.remove("active");
        }
    });

    passwordInput.addEventListener(event, () => {
        if (passwordInput.validity.valueMissing) {
            passwordError.textContent = "Password must be filled";
            passwordError.classList.add("active");
        } else if (passwordInput.validity.tooShort) {
            passwordError.textContent =
                "Your password must be 8 characters or more";
            passwordError.classList.add("active");
        } else {
            passwordError.textContent = "";
            passwordError.classList.remove("active");
        }
    });

    confirmPasswordInput.addEventListener(event, () => {
        if (confirmPasswordInput.validity.valueMissing) {
            confirmPasswordInput.setCustomValidity(
                "Please confirm your password",
            );
            confirmPasswordError.textContent = "Please confirm your password";
            confirmPasswordError.classList.add("active");
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.setCustomValidity(
                "Your password confirmation is different from your password",
            );
            confirmPasswordError.textContent =
                "Your password confirmation is different from your password";
            confirmPasswordError.classList.add("active");
        } else {
            confirmPasswordInput.setCustomValidity("");
            confirmPasswordError.textContent = "";
            confirmPasswordError.classList.remove("active");
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
        const data = new FormData(form);
        console.log(data);
    } else {
        return;
    }
});
