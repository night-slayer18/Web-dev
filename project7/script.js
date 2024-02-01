const card_title = document.getElementsByClassName("card-title")[0];
card_title.style.color = "red";

const newCard = document.getElementById("titlecard");
newCard.style.fontSize = "3rem";

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const cardText = document.querySelectorAll(".card-title");
cardText.forEach((item) => {
    let col = randomColor();
  item.style.color = col;
});

document.querySelector(".this").style.color = "orange";
document.querySelector(".this").style.background = "yellow";
