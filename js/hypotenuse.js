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
    result.innerHTML = `
    <code>
      a = ${cath1Val}
      </br>
      b = ${cath2Val} 
      </br>
      c = √(a² + b²)
      </br>
      c = √${gypo} 
      </br>
      c = ${gypoRediz.toFixed(2)}
      </code>
    `;
    reset.addEventListener("click", () => {
      result.innerHTML = "";
      cath1.value = "";
      cath2.value = "";
    });
  });
});
