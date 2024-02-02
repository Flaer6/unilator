"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cath1 = document.getElementById("cathetus");
  const gypo = document.getElementById("hypotenuse");
  const cathBtn = document.querySelector(".cathBtn");
  const result = document.querySelector(".result");
  const reset = document.getElementById("reset");

  cathBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const cath1Val = parseFloat(cath1.value);
    const gypoVal = parseFloat(gypo.value);
    const cath2 = gypoVal ** 2 - cath1Val ** 2;
    const cath2Rediz = Math.sqrt(cath2);

    console.log("click");

    typeText(
      result,
      `
a = ${cath1Val}
c = ${gypoVal}
b = √(c² - a²)
b = √${cath2}
b = ${cath2Rediz.toFixed(2)}
`
    );
  });

  reset.addEventListener("click", () => {
    resetFields([result, cath1, gypo]);
  });

  function typeText(element, text) {
    let lines = text.split("\n");
    let index = 0;

    function type() {
      element.innerHTML += lines[index];
      index++;
      if (index < lines.length) {
        setTimeout(() => {
          element.innerHTML += "<br>";
          type();
        }, 150);
      }
    }

    type();
  }
});
