/*second commit optimization*/

const section2 = document.querySelector(".section-2");
const section3 = document.querySelector(".section-3");
const textAnimation = document.querySelector(".text-animation-1");
const inicio = document.querySelector(".inicio");
const projetos = document.querySelector(".projetos");
const sobreMim = document.querySelector(".sobre-mim");
const oQueEuEstudo = document.querySelector(".o-que-estudo");
const iconArrowDown = document.querySelector(".icon-animation-1");

textAnimation.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 200;
  const where =
    section2.getBoundingClientRect().top + window.scrollY - scrollMin;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

inicio.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

projetos.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 200;

  const where =
    section2.getBoundingClientRect().top + window.scrollY - scrollMin;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

sobreMim.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 200;

  const where =
    section3.getBoundingClientRect().top + window.scrollY - scrollMin;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

oQueEuEstudo.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 100;

  const where =
    document.querySelector(".section-4").getBoundingClientRect().top +
    window.scrollY -
    scrollMin;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

iconArrowDown.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 100;

  const where =
    document.querySelector(".section-4").getBoundingClientRect().top +
    window.scrollY -
    scrollMin;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});
