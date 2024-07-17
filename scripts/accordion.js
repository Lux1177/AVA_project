const accordionButtons = document.body.querySelectorAll(".accordion-button");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    accordionButton.lastElementChild.classList.toggle("fa-plus");
    accordionButton.lastElementChild.classList.toggle("fa-minus");
    accordionButton.nextElementSibling.classList.toggle("accordion-show");
  });
});
