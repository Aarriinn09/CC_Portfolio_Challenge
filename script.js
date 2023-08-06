"use strict";

const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard Clause
  if (!clicked) {
    return;
  }
  // confetti();
  const canvas = document.querySelector("#confetti");
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
  console.log(clicked);

  // Removing Active Classes
  tabs.forEach(function (el) {
    el.classList.remove("operations__tab--active");
  });
  tabContent.forEach(function (el) {
    el.classList.remove("operations__content--active");
  });

  // Active Tab
  clicked.classList.add("operations__tab--active");

  // Active Content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
