const initSlider = () => {
    const dishList = document.querySelector(".slider .dish-list");
    const slideButton = document.querySelector(".slider .backward");

    slideButton.forEach(button => {
        button.addEventListener("click", () => {
         const direction = button.id === "backward" ? -1 : 1;
         const scrollAmount = dishList.clientWidth * direction;
        dishList.scrollBy({left: scrollAmount, behavior: "smooth"});
    });
  });
}
window.addEventListener("load", initSlider);