

console.log("JavaScript er lastet");

const button = document.querySelector("#welcome");
const greeting = document.querySelector("#greeting");

if (button && greeting) {
  button.addEventListener("click", () => {
    greeting.textContent = "Velkommen til Studentguiden!";
  });
}