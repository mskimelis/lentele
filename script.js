`use strict`;

var inputValue1 = document.getElementById(`inputValue1`);
var inputValue2 = document.getElementById(`inputValue2`);
var inputValue3 = document.getElementById(`inputValue3`);

function myCreateFunction() {
  if (inputValue1.value === ``) {
    alert(`Įveskite duomenis`);
  } else if (inputValue2.value === ``) {
    alert(`Įveskite duomenis`);
  } else if (inputValue3.value == 0 || inputValue3.value < 0){
    alert(`Įveskite duomenis`);
  } else {
    var table = document.getElementById(`Lentele`);
    var row = table.insertRow();
    var eile1 = row.insertCell(0);
    var eile2 = row.insertCell(1);
    var eile3 = row.insertCell(2);
    eile1.innerHTML = `${inputValue1.value}`;
    eile2.innerHTML = `${inputValue2.value}`;
    eile3.innerHTML = `${inputValue3.value}`;
    inputValue1.value = ``;
    inputValue2.value = ``;
    inputValue3.value = ``;
  }
}
function myDeleteFunction() {
  document.getElementById(`removeRow`).deleteRow(0);
}

function myDeleteFunction2() {
  document.getElementById(`removeRow`).deleteRow(-1);
}
