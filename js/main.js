//show content of category
const arrowDown = document.querySelector(".category__boxOne__icon");
const boxContent = document.querySelector(".category__boxSecond");

const showContent = () => {
  boxContent.classList.toggle("category__boxSecond--showContent");
  arrowDown.classList.toggle("category__boxOne__icon--iconUp");
};
arrowDown.addEventListener("click", showContent);
