function Menu() {
  const menu = pegarElemento('#menu-container');
  const tituloMenu = pegarElemento('.texto-cima');
  const botao = pegarElemento('.botao');
  const pontFinal = pegarElemento('.pontuacao-final');
  this.inico = true;
  let jogo = new RiverRaid();

  if (this.inico) {
    escreverNoElemento(tituloMenu, 'River Raid');
    escreverNoElemento(botao, 'Iniciar');
    botao.addEventListener('click', (event) => {
      ordemElemento(menu, -1);
      jogo.start();
    });
  }

  botao.addEventListener('click', (event) => {
    if (jogo.perdeu) {
      ordemElemento(menu, -1);

      const janela = document.getElementById('window');
      removeFilhos(janela);

      const esgotamento = document.getElementById('esgotamento');
      esgotamento.style.height = 0;
      jogo = new RiverRaid();
      jogo.start();
    }
  });

  setInterval(() => {
    if (jogo.perdeu) {
      ordemElemento(menu, 2);
      escreverNoElemento(tituloMenu, 'Game Over');
      escreverNoElemento(botao, 'Reiniciar');
      escreverNoElemento(pontFinal, `${jogo.getPontuacao()} pontos <br>${jogo.getQuantidadeFlorPego()} flores`);
    }
  }, 20);
}

function Progresso() {
  this.elemento = novoElemento('span', 'progresso');
  this.pontos = -1;
  this.pegouMoeda = () => {
    this.pontos += 10;
    escreverNoElemento(this.elemento, this.pontos);
  };
  this.atualizarPontos = () => {
    this.pontos += 1;
    escreverNoElemento(this.elemento, this.pontos);
  };
  this.atualizarPontos();
  this.getPontuacao = () => {
    return this.pontos;
  };
}

function Boneco (largura, tamanho, movimento) {
    this.elemento = novoElemento('div', 'boneco');
    this.imagem = novoElemento('img',  'bonecoImg');
    this.imagem.src = '../img/boneco.webp';
    this.elemento.appendChild(this.imagem);
    this.esquerda = false;
    this.direita = false;
    this.getAndar = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setAndar = (x) => this.elemento.style.left = `${x}px`;
    this.setAndar(largura/2 - tamanho/2);
    window.onkeydown = (event) => {
        if (event.key === 'ArrowLeft' && this.getAndar() > 0) {
          this.esquerda = true;
        } else if (event.key === 'ArrowRight' && this.getAndar() < (largura-tamanho)) {
          this.direita = true;
        }
    };
    this.animar = () => {
        if (this.esquerda) {
            this.setAndar(this.getAndar() - movimento);
        }
        if (this.direita && this.getAndar() < (largura-tamanho)){
            this.setAndar(this.getAndar() + movimento);
        }
        this.esquerda = false;
        this.direita = false;
    };
}

function Combustivel() {
  this.elemento = document.getElementById('esgotamento');
  this.getAltura = () => parseInt(this.elemento.clientHeight);
  this.setAltura = (y) => (this.elemento.style.height = `${y}px`);
  this.pegouCombustivel = false;
  this.esgotou = false;

  this.animar = () => {
    if (this.pegouCombustivel == true) {
      let novoNivel = this.getAltura() - 300;
      this.setAltura(novoNivel < 0 ? 0 : novoNivel);
      this.pegouCombustivel = false;
      return;
    }
    this.setAltura(this.getAltura() + 1);
    if (this.getAltura() == 500) this.esgotou = true;
  };
}

function CombustivelIcone(Progresso) {
  this.elemento = novoElemento('img', 'img-combustivel');
  this.elemento.src = '../img/flor.webp';
  this.pegou = false;
  this.quantidadePego = 0;

  this.getAltura = () => parseInt(this.elemento.style.top.split('px')[0]);
  this.setAltura = (y) => (this.elemento.style.top = `${y}px`);
  this.setLargura = (x) => (this.elemento.style.left = `${x}px`);
  this.randomLargura = () => {
    const x = Math.floor(Math.random() * 700) + 100;
    this.setLargura(x);
  };
  this.setAltura(-700);
  this.randomLargura();
  this.animar = () => {
    if (this.pegou == true) {
      this.setAltura(500);
      this.pegou = false;
    }
    if (this.getAltura() > 800) {
      Progresso.atualizarPontos();
      this.setAltura(-500);
      this.randomLargura();
      return;
    }
    this.setAltura(this.getAltura() + 3);
  };
}

function Moeda(Progresso) {
  this.elemento = novoElemento('img', 'img-moeda');
  this.elemento.src = '../img/moeda.webp';
  this.pegou = false;

  this.getAltura = () => parseInt(this.elemento.style.top.split('px')[0]);
  this.setAltura = (y) => (this.elemento.style.top = `${y}px`);
  this.setLargura = (x) => (this.elemento.style.left = `${x}px`);
  this.randomLargura = () => {
    const x = Math.floor(Math.random() * 700) + 100;
    this.setLargura(x);
  };
  this.setAltura(-900);
  this.randomLargura();
  this.animar = () => {
    if (this.pegou == true) {
      this.setAltura(500);
      Progresso.pegouMoeda();
      this.pegou = false;
    }
    if (this.getAltura() > 900) {
      this.setAltura(-500);
      this.randomLargura();
      return;
    }
    this.setAltura(this.getAltura() + 3);
  };
}



function colidiuObstaculos(Boneco, Obstaculos) {
  let colidiu = false;
  let cont = 0;
  Obstaculos.linhas.forEach((linha) => {
    if (!colidiu) {
      const esquerda = linha.arrayObstaculos[0].elemento;
      const meio = linha.arrayObstaculos[1].elemento;
      const direita = linha.arrayObstaculos[2].elemento;

      colidiu =
        estaoSobrepostos(Boneco.elemento, esquerda) ||
        estaoSobrepostos(Boneco.elemento, meio) ||
        estaoSobrepostos(Boneco.elemento, direita);
    }
    cont++;
  });
  return colidiu;
}

function pegouCombustivel(Boneco, CombustivelIcone, Combustivel) {
  if (estaoSobrepostos(Boneco.elemento, CombustivelIcone.elemento)) {
    Combustivel.pegouCombustivel = true;
    CombustivelIcone.pegou = true;
    CombustivelIcone.quantidadePego++;
  }
}

const escolhendo = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
};

const escolheFuncao = (Obstaculos) => {
  if (Obstaculos.atual === 3) return funcoesParaEscolher[0];
  if (Obstaculos.atual === 4) return funcoesParaEscolher[1];
  if (Obstaculos.atual === 5) return funcoesParaEscolher[2];
};

const cenario = (Obstaculos) => {
  if (
    Obstaculos.inferiorIniciou == false ||
    Obstaculos.getUltimoElemParticao(1) >= 500
  ) {
    if (Obstaculos.atual == -1) {
      funcoesParaEscolher[2][2](1, Obstaculos);
    } else escolhendo(escolheFuncao(Obstaculos))(1, Obstaculos);
    Obstaculos.inferiorIniciou = true;
  }
  if (
    Obstaculos.superiorIniciou == false ||
    Obstaculos.getUltimoElemParticao(2) >= 500
  ) {
    escolhendo(escolheFuncao(Obstaculos))(2, Obstaculos);
    Obstaculos.superiorIniciou = true;
  }
};
function RiverRaid() {
    const janelaJogo = document.getElementById('window');
    const largura = janelaJogo.clientWidth;
    const deslocamento = 4;
    this.perdeu = false;
    this.getPontuacao = () => {
      return progresso.getPontuacao();
    };
    this.getQuantidadeFlorPego = () => {
      return iconeFlor.quantidadePego;
    };
  
    const obstaculos = new Obstaculos();
    const progresso = new Progresso();
    const boneco = new Boneco(largura, 40, 30);
    const iconeFlor = new CombustivelIcone(progresso);
    const combustivel = new Combustivel();
    const coin = new Moeda(progresso);
  
    obstaculos.linhas.forEach((linha) => janelaJogo.appendChild(linha.elemento));
    janelaJogo.appendChild(boneco.elemento);
    janelaJogo.appendChild(progresso.elemento);
    janelaJogo.appendChild(iconeFlor.elemento);
    janelaJogo.appendChild(coin.elemento);
  
    this.animar = () => {
      obstaculos.linhas.forEach((linha) => {
        if (linha.getAltura() >= 500) linha.setAltura(-linha.elemento.clientHeight * 9);
        linha.setAltura(linha.getAltura() + deslocamento);
      });
    };
  
    this.start = () => {
      const temporizador = setInterval(() => {
        boneco.animar();
        this.animar();
        iconeFlor.animar();
        cenario(obstaculos);
        if (colidiuObstaculos(boneco, obstaculos)) {
          clearInterval(temporizador);
          clearInterval(timerTudo);
          this.perdeu = true;
        }
      }, 15);
  
      const timerTudo = setInterval(() => {
        combustivel.animar();
        coin.animar();
        if (estaoSobrepostos(boneco.elemento, coin.elemento)) {
          coin.pegou = true;
        }
  
        if (combustivel.esgotou) {
          clearInterval(temporizador);
          clearInterval(timerTudo);
          this.perdeu = true;
        }
        pegouCombustivel(boneco, iconeFlor, combustivel);
      }, 50);
    };
  }
  

new Menu();
