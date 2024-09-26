const inicio = document.querySelector(".inicio");
const section1 = document.querySelector(".section-1");
const irPara = document.querySelector(".text-animation-1");
const section2 = document.querySelector(".section-2");
const meusCursos = document.querySelector(".meus-cursos");

inicio.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

irPara.addEventListener("click", function (e) {
  e.preventDefault();
  const scroll = 200;

  const where = section2.getBoundingClientRect().top + window.scrollY - scroll;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

meusCursos.addEventListener("click", function (e) {
  e.preventDefault();
  const scroll = 200;

  const where = section2.getBoundingClientRect().top + window.scrollY - scroll;

  window.scrollTo({
    top: where,
    behavior: "smooth",
  });
});

function showContent(tipoCurso) {
  document.getElementById("superior").classList.remove("selected");
  document.getElementById("ingles").classList.remove("selected");
  document.getElementById("medio").classList.remove("selected");
  document.getElementById("livres").classList.remove("selected");
  document.getElementById(tipoCurso).classList.add("selected");

  let content = "";
  if (tipoCurso === "superior") {
    content = `
        <div class="card-superior">
          <img src="./img/logo_fatec_pb.webp" loading="lazy"/>
          <p>Análise e Desenvolvimento de Sistemas</p>
          <p>Cursando 3° Semestre</p>
          <section class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </section>
        </div>`;
  } else if (tipoCurso === "ingles") {
    content = `
        <div class="card-ingles">
          <img src="./img/culturaInglesa.webp" loading="lazy"/>
          <p>Estudando desde 01/2023</p>
          <p>Nível I1</p>
          <section class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </section>
        </div>`;
  } else if (tipoCurso === "medio") {
    content = `
        <div class="card-medio">
          <h2>Ensino Médio</h2>
          <p>Duração: 2 anos</p>
          <p>Encerrado</p>
          <a href="https://www.linkedin.com/in/arthur-moreira-ramos" target="_blank"><button class="btn">SAIBA MAIS</button></a>
        </div>`;
  } else if (tipoCurso === "livres") {
    content = `
  <div class="card-livre">
    <div class="livre1">
      <img src="./img/SENAI.webp" loading="lazy"/>
      <div>
        <p>Microsoft AZ-900</p>
        <p style="font-size:18px; font-weight:100;">2023</p>
      </div>
        <a href="https://www.linkedin.com/in/arthur-moreira-ramos"><button class="btn">SAIBA MAIS</button></a>
    </div>
    <div class="livre2">
      <img src="./img/SENAI.webp" loading="lazy"/>
      <div>
          <p>Microsoft AI-900</p>
          <p style="font-size:18px; font-weight:100;">2023</p>
          </div>
          <a href="https://www.linkedin.com/in/arthur-moreira-ramos"><button class="btn">SAIBA MAIS</button></a>
    </div>
    <div class="livre3">
      <img src="./img/SENAI.webp" loading="lazy"/>
        <div>
          <p>Google Cloud Foundations</p>
          <p style="font-size:18px; font-weight:100;">2023</p>
          </div>
          <a href="https://www.linkedin.com/in/arthur-moreira-ramos"><button class="btn">SAIBA MAIS</button></a>
      </div>
    <div class="livre4">
      <img src="./img/SENAI.webp" loading="lazy"/>
        <div>
          <p>AWS Cloud Foundations</p>
          <p style="font-size:18px; font-weight:100;">2024</p>
          </div>
          <a href="https://www.linkedin.com/in/arthur-moreira-ramos"><button class="btn">SAIBA MAIS</button></a>
    </div>
    <div class="livre5">
      <img src="./img/SENAI.webp" loading="lazy"/>
        <div>
          <p>Google Cloud Engineer</p>
          <p style="font-size:18px; font-weight:100;">2024</p>
          </div>
          <a href="https://www.linkedin.com/in/arthur-moreira-ramos"><button class="btn">SAIBA MAIS</button></a>
    </div>
  </div>`;
  }

  document.getElementById("content").innerHTML = content;
}

window.onload = function () {
  showContent("superior");
};
