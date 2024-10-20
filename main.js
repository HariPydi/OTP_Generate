let button = document.getElementById("btn");
let para = document.getElementById("p");

button.addEventListener("click", () => {
  let a = otp();
  let b = a + " is your otp";

  para.innerHTML = b;
});

function otp() {
  let a = Math.random() * 1000000;
  let b = Math.floor(a);
  return b;
}
