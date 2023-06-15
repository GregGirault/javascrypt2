const input = document.getElementById("input") ; 
const checkbox = document.getElementById("input") ; 
const display = document.getElementById("input") ; 
document.getElementById("checkbox").addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    display.textContent = "Hide";
  } else {
    input.type = "password";
    display.textContent = "Show";
  }
});

checkbox.addEventListener("mousedown", function () {
  input.type = "text";
});

checkbox.addEventListener("mouseup", function () {
  input.type = "password";
});
