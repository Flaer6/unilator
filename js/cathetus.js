"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let cath1 = document.getElementById("cathetus");
  let gypo = document.getElementById("hypotenuse");
  let cathBtn = document.querySelector(".cathBtn");
  let result = document.querySelector(".result");
  let reset = document.getElementById("reset");

  cathBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let cath1Val = parseFloat(cath1.value);
    let gypoVal = parseFloat(gypo.value);
    let cath2 = gypoVal ** 2 - cath1Val ** 2;
    let cath2Rediz = Math.sqrt(cath2);
    console.log("click");
    result.innerHTML = `
    <code>
      a = ${cath1Val}
      </br>
      c = ${gypoVal}
      </br>
      b = √(c² - a²)
      </br>
      b = √${cath2}
      </br>
      b = ${cath2Rediz.toFixed(2)}
      </code>
    `;
    reset.addEventListener("click", () => {
      result.innerHTML = "";
      cath1.value = ''
      gypo.value = ''
    });
  });
});
