
const Grey = 'hsl(231, 7%, 60%)';
const tomato = "#FFE8E6"
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const successBtn = document.getElementById("success-btn");
const successDialog = document.getElementById("success-dialog");
const successEmail = document.getElementById("success-email");
const errorMessage = document.getElementById("error-message");
const subscribeBtn = document.getElementById("subscribe-btn");
/* const Grey = getComputedStyle(document.documentElement).getPropertyValue('$Grey');
console.log(Grey); */ 
const mainPage = document.getElementById("main-page");

const checkEmail = () => {
    const emailRegex = /^[a-z][\w\d]+[@][a-z]+[.][a-z]{2,4}$/;
    if (!emailRegex.test(emailInput.value) || emailInput.value === '') {
        signupForm.classList.add("errorForm")
        errorMessage.textContent = "valid email required";
        /* errorMessage.style.color = "#dd847f";
        errorMessage.style.fontWeight = "700"
        emailInput.style.border = "1px solid red";
        emailInput.style.backgroundColor = `${tomato}`;
        emailInput.style.color = "#DC9C9A";
        emailInput.style.fontWeight = "bold"; */
    } else {
        signupForm.classList.remove("errorForm");
        errorMessage.textContent = "";
        /* emailInput.style.border = `1px solid ${Grey}` */;
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


