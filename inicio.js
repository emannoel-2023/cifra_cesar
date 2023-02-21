let barra = document.getElementById("barra");
let selecionar = document.getElementById("select");
let numero = document.getElementById("output");
let barrinha = document.getElementById("barrinha");
let texto_a_codificar = document.getElementById("input_original");
let texto_codificado = document.getElementById("input_resultado");
let botao_codificar = document.getElementById("botao");
let botao_decoficar = document.getElementById("botao_segundo");

botao_codificar.addEventListener("click", function () {
  if (selecionar.value == "base64") {
    texto_1();
  } else {
    let valor = texto_a_codificar.value;
    let barr = +barrinha.value;
    let resultado = "";
    for (let i = 0; i < valor.length; i++) {
      if (valor[i].charCodeAt() >= 65 && valor[i].charCodeAt() <= 90) {
        let str = String.fromCharCode(
          ((valor[i].charCodeAt() - 65 + barr) % 26) + 65
        );
        resultado += str;
      } else if (valor[i].charCodeAt() >= 97 && valor[i].charCodeAt() <= 122) {
        console.log(valor[i].charCodeAt())
        let str = String.fromCharCode(
          ((valor[i].charCodeAt() - 97 + barr) % 26) + 97
        );
        resultado += str;
      } else {
        resultado += valor[i];
      }
    }
    texto_codificado.value = resultado;
    texto_a_codificar.value = "";
  }
});

botao_decoficar.addEventListener("click", function () {
  if (selecionar.value == "base64") {
    texto_2();
  } else {
    let valor = texto_codificado.value;
    let barr = +barrinha.value;
    let resultado = "";
    for (let i = 0; i < valor.length; i++) {
      if (valor[i].charCodeAt() >= 65 && valor[i].charCodeAt() <= 90) {
        let str = String.fromCharCode(
          ((valor[i].charCodeAt() -90 - barr) % 26) + 90
        );
        resultado += str;
      } else if (valor[i].charCodeAt() >= 97 && valor[i].charCodeAt() <= 122) {
        console.log(barr)
        let str = String.fromCharCode(
          ((valor[i].charCodeAt() -122 -barr) % 26) + 122
        );
        console.log(valor[i].charCodeAt())
        resultado += str;
      } else {
        resultado += valor[i];
      }
    }
    texto_a_codificar.value = resultado;
    texto_codificado.value = "";
  }
});

function cifra_barra() {
  if (selecionar.value == "base64") {
    barra.classList.add("brr");
  } else {
    barra.classList.remove("brr");
  }
}
function barras() {
  numero.textContent = barrinha.value;
}
function texto_1() {
  texto_codificado.value = btoa(texto_a_codificar.value);
  texto_a_codificar.value = "";
}
function texto_2() {
  texto_a_codificar.value = atob(texto_codificado.value);
  texto_codificado.value = "";
}
