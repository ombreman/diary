// const loginForm = document.getElementById("login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// or

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function onLoginBtnclick() {
  const username = loginInput.value
  if (username === "") {
    alert("Please write your name!")
  } else if (username.length > 15) {
    alert("Your name is too long")
  }
}

loginButton.addEventListener("click", onLoginBtnclick)