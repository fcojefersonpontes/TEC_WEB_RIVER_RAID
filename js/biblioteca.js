function esconderMostrar(esconder, mostrar) {
    esconder.style.display = 'none';
    mostrar.style.display = 'flex';
  }
  function pegarElemento(seletor) {
    return document.querySelector(seletor);
  }
  function escreverNoElemento(elemento, texto) {
    elemento.innerHTML = texto;
  }
  function ordemElemento(elemento, posicao) {
    elemento.style.zIndex = posicao;
  }
  function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName);
    elemento.className = className;
    return elemento;
  }
  function removeFilhos(elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
  
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();
    return !(
      a.top > b.bottom ||
      a.right < b.left ||
      a.bottom < b.top ||
      a.left > b.right
    );
  }
  