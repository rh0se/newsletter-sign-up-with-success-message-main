const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const successBtn = document.getElementById("success-btn");
const successDialog = document.getElementById("success-dialog");
const successEmail = document.getElementById("success-email");
const errorMessage = document.getElementById("error-message");
const subscribeBtn = document.getElementById("subscribe-btn");
const mainPage = document.getElementById("main-page");

const checkEmail = () => {
    const emailRegex = /^[a-z][\w\d]+[@][a-z]+[.][a-z]{2,4}$/;
    if (!emailRegex.test(emailInput.value) || emailInput.value === '') {
        errorMessage.textContent = "valid email required";
        errorMessage.style.color = "red";
        emailInput.style.border = "1px solid red";
        notifyButton.style.marginBottom = "11px";
    } else {
        errorMessage.textContent = "";
        emailInput.style.border = "1px solid grey";
        successEmail.innerText = `${emailInput.value}`;
        mainPage.classList.toggle("hidden");
        successDialog.showModal()
    }
}

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkEmail();
})

successBtn.addEventListener("click", (e) => {
    successDialog.close();
    mainPage.classList.toggle("hidden");
})


