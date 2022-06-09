//show content of category
const arrowDown = document.querySelector(".category__boxOne__icon");
const boxContent = document.querySelector(".category__boxSecond");

const showContent = () => {
  boxContent.classList.toggle("category__boxSecond--showContent");
  arrowDown.classList.toggle("category__boxOne__icon--iconUp");
};
arrowDown.addEventListener("click", showContent);

//show offer and cover other main elements

const offersSection = document.querySelector(".offers");
const allCategories = document.querySelectorAll(
  ".category__boxSecond__list__item"
);
const firstMainBlock = document.querySelector(".blockFirst");
const secondMainBlock = document.querySelector(".blockSecond");

allCategories.forEach((item) => {
  item.addEventListener("click", () => {
    offersSection.classList.add("offers--showOffers");
    firstMainBlock.classList.add("blockFirst--coverContent");
    secondMainBlock.classList.add("blockSecond--coverContent");
  });
});
