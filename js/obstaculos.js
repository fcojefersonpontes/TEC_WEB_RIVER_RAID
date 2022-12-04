function Obstaculo() {
    this.elemento = novoElemento('div', 'obstaculo');
  }
  
  function LinhaDeObstaculos() {
    this.elemento = novoElemento('div', 'linha-de-obstaculo');
    this.arrayObstaculos = [new Obstaculo(), new Obstaculo(), new Obstaculo()];
  
    this.arrayObstaculos.forEach((obstaculo) =>
      this.elemento.appendChild(obstaculo.elemento)
    );
  
    this.getAltura = () => parseInt(this.elemento.style.top.split('px')[0]);
    this.setAltura = (y) => (this.elemento.style.top = `${y}px`);
    this.getComprimento = () => this.elemento.clientHeight;
    this.setAltura(0);
  }
  
  function Obstaculos() {
    this.linhas = [
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
      new LinhaDeObstaculos(),
    ];
  
    this.getUltimoElemParticao = (posicao) => {
      let ultimoPosicaoParticao = 7 * posicao;
      return this.linhas[ultimoPosicaoParticao - 1].getAltura();
    };
    this.atual = -1;
  
    this.inferiorIniciou = false;
    this.superiorIniciou = false;
  
    this.limparParticao = (posicao) => {
      let fim = posicao * 7;
      let inico = fim - 7;
      for (let linha = inico; linha < fim; linha++) {
        this.linhas[linha].arrayObstaculos[0].elemento.style = 'display: flex;';
        this.linhas[linha].arrayObstaculos[1].elemento.style = 'display: flex;';
        this.linhas[linha].arrayObstaculos[2].elemento.style = 'display: flex;';
      }
    };
    this.afastamento = () => {
      let i = 0;
      this.linhas.forEach((linha) => {
        linha.setAltura(-i * 100);
        i++;
      });
    };
    this.afastamento();
  
    const deslocamento = 3;
    this.animar = () => {
      this.linhas.forEach((linha) => {
        if (linha.getAltura() < 900) {
          linha.setAltura(-50);
        }
        linha.setAltura(linha.getAltura() + deslocamento);
      });
    };
  }