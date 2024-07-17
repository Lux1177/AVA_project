const accordionButtons = document.body.querySelectorAll(".accordion-button");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    if (
      accordionButton.nextElementSibling.classList.contains("accordion-show")
    ) {
      accordionButton.nextElementSibling.classList.remove("accordion-show");
      accordionButton.lastElementChild.classList.remove("fa-minus");
      accordionButton.lastElementChild.classList.add("fa-plus");
    } else {
      const minuses = document.body.querySelectorAll(".fa-minus");
      const isShownElems = document.body.querySelectorAll(".accordion-show");
      isShownElems.forEach((shownElem) => {
        shownElem.classList.remove("accordion-show");
      });
      minuses.forEach((minus) => {
        minus.classList.remove("fa-minus");
        minus.classList.add("fa-plus");
      });
      accordionButton.nextElementSibling.classList.add("accordion-show");
      accordionButton.lastElementChild.classList.remove("fa-plus");
      accordionButton.lastElementChild.classList.add("fa-minus");
    }
  });
});
