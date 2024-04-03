"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let cath1 = document.getElementById("cathetus1");
  let cath2 = document.getElementById("cathetus2");
  let gypoBtn = document.querySelector(".hypotenuse");
  let result = document.querySelector(".result");
  let reset = document.getElementById("reset");

  gypoBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let cath1Val = parseFloat(cath1.value);
    let cath2Val = parseFloat(cath2.value);
    let gypo = cath1Val ** 2 + cath2Val ** 2;
    let gypoRediz = Math.sqrt(gypo);

    console.log("click");

    typeText(
      result,
      `
a = ${cath1Val}
b = ${cath2Val} 
c = √${cath1Val}² + ${cath2Val}²
c = √${cath1Val**2} + ${cath2Val**2}
c = √${gypo} 
c = ${gypoRediz.toFixed(2)}
`
    );
  });

  reset.addEventListener("click", () => {
    result.innerHTML = ""; // Очищаем содержимое элемента .result
    cath1.value = "";
    cath2.value = "";
  });

  function typeText(element, text) {
    let lines = text.split("\n");
    let index = 0;

    function type() {
      element.innerHTML += lines[index];
      index++;
      if (index < lines.length) {
        setTimeout(() => {
          element.innerHTML += "<br>"; // Добавление переноса строки между строками
          type();
        }, 150);
      }
    }

    type(); // Запуск функции печати
  }
});
