const introBtn = document.querySelector(".intro-box-btn");
const earlyBox = document.querySelector(".early-box");
const inputValue = document.querySelector("input");
const earlyBoxBtn = document.querySelector(".early-box-btn");

introBtn.addEventListener("click", (event) => {
  event.preventDefault();
  earlyBox.scrollIntoView({ behavior: "smooth" });
});

function formValidation(valueTocheck) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueTocheck);
}

earlyBoxBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const errorMessage = document.createElement("small");
  errorMessage.classList.add("errorMessage");

  if (inputValue.value === "") {
    errorMessage.innerHTML = `Email cannot be empty`;
    earlyBox.append(errorMessage);
    setInterval(() => errorMessage.remove(), 2700);
  } else if (!formValidation(inputValue.value)) {
    errorMessage.innerHTML = `Please enter a valid email address`;
    earlyBox.append(errorMessage);
    setInterval(() => errorMessage.remove(), 2700);
  }
});
