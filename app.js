const form = document.querySelector("form");
const username =
  document.querySelector(".username").firstChild.nextElementSibling
    .nextElementSibling.nextElementSibling;
const email =
  document.querySelector(".email").firstChild.nextElementSibling
    .nextElementSibling.nextElementSibling;
const password =
  document.querySelector(".password").firstChild.nextElementSibling
    .nextElementSibling.nextElementSibling;
const passwordConfirm =
  document.querySelector(".passwordConfirm").firstChild.nextElementSibling
    .nextElementSibling.nextElementSibling;

// This is from the Internet to check if the input is an email
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let passUsername;
let passEmail;
let passPassword;
let passPasswordConfirm;

// SUCCESS FUNCTION
function success(e) {
  if (!Array.from(e.classList).includes("success")) {
    e.classList.toggle("success");
  }
  if (Array.from(e.classList).includes("error")) {
    e.classList.toggle("error");
  }

  if (
    Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "msg"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("msg");
  }

  if (
    !Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "success"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("success");
  }
  if (
    Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "error"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("error");
  }

  e.nextElementSibling.nextElementSibling.innerText = "All good";
}

// ERROR FUNCTION
function error(e) {
  if (Array.from(e.classList).includes("success")) {
    e.classList.toggle("success");
  }
  if (!Array.from(e.classList).includes("error")) {
    e.classList.toggle("error");
  }

  if (
    Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "msg"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("msg");
  }

  if (
    Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "success"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("success");
  }
  if (
    !Array.from(e.nextElementSibling.nextElementSibling.classList).includes(
      "error"
    )
  ) {
    e.nextElementSibling.nextElementSibling.classList.toggle("error");
  }
}

form.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the page to submit the form (and therefore refresh the page)

  // USERNAME
  username.addEventListener("change", (e) => {
    if (username.value.length >= 5 && username.value.length <= 10) {
      success(username);
      passUsername = true;
    } else {
      error(username);
      username.nextElementSibling.nextElementSibling.innerText =
        "Must be at least 5 characters and not more than 10 characters";
      passUsername = false;
    }
  });

  // EMAIL
  email.addEventListener("change", (e) => {
    if (email.value.match(validRegex)) {
      success(email);
      passEmail = true;
    } else {
      error(email);
      email.nextElementSibling.nextElementSibling.innerText =
        "Must be an email adress (eg. name@domain.com)";
      passEmail = false;
    }
  });

  // PASSWORD
  password.addEventListener("change", (e) => {
    if (password.value.length >= 8 && password.value.length <= 15) {
      success(password);
      passPassword = true;
    } else {
      error(password);
      password.nextElementSibling.nextElementSibling.innerText =
        "Must be at least 8 characters and not more than 15 characters";
      passPassword = false;
    }
  });

  // PASSWORD CONFIRMATION
  passwordConfirm.addEventListener("change", (e) => {
    if (password.value === passwordConfirm.value) {
      success(passwordConfirm);
      passPasswordConfirm = true;
    } else {
      error(passwordConfirm);
      passwordConfirm.nextElementSibling.nextElementSibling.innerText =
        "Please make sure you've wrote the same password";
      passPasswordConfirm = false;
    }
  });

  // console.log quand tout est ok
  if (passUsername && passEmail && passPassword && passPasswordConfirm) {
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(passwordConfirm.value);
  }
});
