"use strict";

function def() {
  var lt = document.getElementById("tempNum").value;
  var lt1 = document.getElementById("options").value;

  if (lt1 === "Celsius") {
    var y = 1.8 * lt;
    y += 32;
    var z = 273.15 + Number(lt);
    document.getElementById("result").value = y + " " + "Fahrenheit";
    document.getElementById("Kelvin").value = z + " Kelvin";
  } else if (lt1 === "Fahrenheit") {
    lt -= 32;

    var _y = lt / 1.8;

    document.getElementById("result").value = _y + "  Celsius";

    var _z = 273.15 + Number(_y);

    document.getElementById("Kelvin").value = _z + " Kelvin";
  } else {
    var _y2 = Number(lt);

    var c = _y2 * (9 / 5) - 459.67;
    document.getElementById("Kelvin").value = c + " " + "Fahrenheit";
    c -= 32;
    c /= 1.8;
    document.getElementById("result").value = c + "  Celsius";
  }
}