function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

function troca() {
  var x = document.getElementById("muda");
  if (x.innerHTML === "FAQ") {
    x.innerHTML = "isso é segredo, não conta";
  } else {
    x.innerHTML = "FAQ";
  }
  var y = document.getElementById("muda");
  if (y.style.color == "blue") {
    y.style.color = "black";
  } else {
    y.style.color = "blue";
  }
}
