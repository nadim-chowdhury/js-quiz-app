let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let q1 = document.getElementById("q1").checked;
  let q2 = document.getElementById("q2").checked;
  let q3 = document.getElementById("q3").checked;
  let q4 = document.getElementById("q4").checked;
  let count = 0;

  if (q1) {
    count++;
  }
  if (q2) {
    count++;
  }
  if (q3) {
    count++;
  }
  if (q4) {
    count++;
  }

  alert("Your result : " + count);
});
