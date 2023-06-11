const button1 = document.getElementById("food-button");
const button2 = document.getElementById("drink-button");
const section1 = document.getElementById("tab1");
const section2 = document.getElementById("tab2");
const menuSection = document.getElementById("menu");

button1.addEventListener("click", () => {
  section1.style.display = "block";
  section2.style.display = "none";
  menuSection.style.height = "fit-content";

  button1.classList.add("active_button");
  button2.classList.remove("active_button");
});

button2.addEventListener("click", () => {
  section1.style.display = "none";
  section2.style.display = "block";
  menuSection.style.height = "fit-content";

  button1.classList.remove("active_button");
  button2.classList.add("active_button");
  menuSection.style.height = "fit-content";
});
section1.style.display = "block";
menuSection.style.height = "fit-content";
button1.classList.add("active_button");
