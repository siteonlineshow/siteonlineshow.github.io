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


function calculadora() {
  var numero1 = parseInt(document.querySelector("#num1").value);
  var numero2 = parseInt(document.querySelector("#num2").value);
  var oper = document.querySelector("#operação").value;
  var calcular;

  if (oper == "add") {
    calcular = numero1 + numero2;
  } else if (oper == "sub") {
    calcular = numero1 - numero2;
  } else if (oper == "div") {
    calcular = numero1 / numero2;
  } else if (oper == "mult") {
    calcular = numero1 * numero2;
  }

  document.querySelector("#resultado").innerHTML = calcular;
}


function contrasena() {
  let formSenha = document.getElementById('sena').value;

  if (formSenha == 'oi amigo') {
    let anchor = document.createElement('a');
    let texto = document.createTextNode('acertou haha');

    anchor.appendChild(texto);
    anchor.href = 'audios.html';
    anchor.style.textAlign = 'center'
    anchor.style.textDecoration = 'none'

    document.getElementById('respostaForm').appendChild(anchor)
  }
  else if (formSenha == 'amigo secreto') {
      let ancora = document.createElement('a');
      let textin = document.createTextNode('o amigo que é um segredo');

      ancora.appendChild(textin);
      ancora.href = 'bellyAmiga.html';
      ancora.style.textAlign = 'center'
      ancora.style.textDecoration = 'none'

      document.getElementById('respostaForm').appendChild(ancora)
  }
  else {
    document.getElementById('senha-errada').innerHTML = '. . .'
  }
}
