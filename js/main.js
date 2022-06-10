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

//change image on click in other dots
const dots = [...document.querySelectorAll(".carousel__dots__dot")];
const backgroundImage = document.querySelector(".carousel");
const arr = [0];
dots.forEach((item, index) => {
  item.classList.remove("active");
  dots[arr[0]].classList.add("active");
  item.addEventListener("click", () => {
    dots[arr.slice(-1)].classList.remove("active");
    item.classList.add("active");
    backgroundImage.setAttribute(
      "style",
      `background-image: url(../images/img${index + 1}.jpg)`
    );
    arr.push(index);
    console.log(arr);
  });
});

// const changeImage = () => {

// }
