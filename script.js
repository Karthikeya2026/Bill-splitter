document.getElementById("tipPercent").addEventListener("change", function () {
  const custom = document.getElementById("customTip");
  custom.style.display = this.value === "custom" ? "block" : "none";
});

function calculateSplit() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const people = parseInt(document.getElementById("peopleCount").value);
  let tip = document.getElementById("tipPercent").value;

  if (tip === "custom") {
    tip = parseFloat(document.getElementById("customTip").value);
  } else {
    tip = parseFloat(tip);
  }

  if (isNaN(bill) || isNaN(people) || isNaN(tip) || bill <= 0 || people <= 0) {
    document.getElementById("result").innerText = "Please enter valid inputs.";
    return;
  }

  const totalTip = bill * (tip / 100);
  const total = bill + totalTip;
  const perPerson = total / people;

  document.getElementById("result").innerText = `Each person pays: ₹${perPerson.toFixed(2)}`;
}
