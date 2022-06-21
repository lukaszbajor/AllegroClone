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

const offersBox = document.querySelector(".offers__box");

allCategories.forEach((item) => {
  item.addEventListener("click", () => {
    offersBox.innerHTML = "";
    offersSection.classList.add("offers--showOffers");
    firstMainBlock.classList.add("blockFirst--coverContent");
    secondMainBlock.classList.add("blockSecond--coverContent");
    products.forEach((product) => {
      if (product.category === item.innerText) {
        const div = document.createElement("div");
        div.classList.add("offers__box__item");
        div.innerHTML = `
          <div class="offers__box__item__detailsBox">
      <div class="offers__box__item__detailsBox__img">
        <img src=${product.imgSrc} alt="product image" />
      </div>
      <div class="offers__box__item__detailsBox__details">
        <h3>${product.name}</h3>
        <p>Stan: ${product.state}</p>
        <p>${product.price}zł</p>
        <p>Z dostawą: ${(product.price + product.priceWithDelivery).toFixed(
          2
        )}zł</p>
      </div>
    </div>
    <div class="wrapForItemEl">
    <div class="offers__box__item__howPeopleBuy">
      <p>${product.peopleBuy} osób ${
          product.state === "Nowy" ? "kupiło" : "licytuje"
        }</p>
    </div>
    <button class="offers__box__item__btn">${
      product.state === "Nowy" ? "koszyk" : "licytuj"
    }</button>
</div>
          `;
        offersBox.appendChild(div);
      }
    });
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
      `background-image: url(./images/img${index + 1}.jpg)`
    );
    arr.push(index);
    console.log(arr);
  });
});

{
  /* <div class="offers__box__item">
  <div class="offers__box__item__detailsBox">
    <div class="offers__box__item__detailsBox__img">
      <img src="./images/nokia.jpg" alt="product image" />
    </div>
    <div class="offers__box__item__detailsBox__details">
      <h3>Telefon Nokia 3310</h3>
      <p>Stan: Nowy</p>
      <p>99.99zł</p>
      <p>Z dostawą: 112.99zł</p>
    </div>
  </div>
  <div class="offers__box__item__howPeopleBuy">
    <p>155 osób kupiło</p>
  </div>
  <button class="offers__box__item__btn">koszyk</button>
</div>; */
}
