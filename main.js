let button = document.getElementById("btn");
let para = document.getElementById("p");
let div = document.getElementById("div");
let toggle = document.getElementById("toggle");

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
toggle.addEventListener("click", () => {
  if (toggle.alt == "Light") {
    div.className = "light";
    button.className = "btn";
    para.className = "p";
    // toggle.innerText = "Dark";
    toggle.alt="Dark"
    toggle.src="https://as2.ftcdn.net/v2/jpg/05/78/50/85/1000_F_578508518_lSf79cg5sF7MibT89n7JaNcOGWPw2w3t.jpg"

  }
  
  else if (toggle.alt == "Dark") {
    div.className = "dark";
    button.className = "btn2";
    para.className = "p2";
    toggle.alt = "Light";
    toggle.src="https://th.bing.com/th/id/OIP.mbzKbnNJkNGrAidzO5abtwHaHa?rs=1&pid=ImgDetMain"
  }
});
