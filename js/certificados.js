/*second commit optimization*/

const inicio = document.querySelector(".inicio");
const certificacoes = document.querySelector(".certificacoes");
const irPara = document.querySelector(".text-animation-1");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");

inicio.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

certificacoes.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 200;
  const section =
    section2.getBoundingClientRect().top + window.scrollY - scrollMin;

  window.scrollTo({
    top: section,
    behavior: "smooth",
  });
});

irPara.addEventListener("click", function (e) {
  e.preventDefault();

  const scrollMin = 200;
  const section =
    section2.getBoundingClientRect().top + window.scrollY - scrollMin;

  window.scrollTo({
    top: section,
    behavior: "smooth",
  });
});
