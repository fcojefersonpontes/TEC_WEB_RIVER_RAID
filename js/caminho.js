const passageLivre = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    obstaculos.atual = 5;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[0].elemento.style =
        'grid-column: 1/2;';
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      obstaculos.linhas[linha].arrayObstaculos[2].elemento.style =
        'grid-column: 10/11;';
    }
  };
  
  const esquerdaParaDireita = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 4;
    for (let linha = inico; linha < fim; linha++) {
      if (cont < 1) {
        obstaculos.linhas[linha].arrayObstaculos[0].elemento.style =
          'display: none;';
      } else {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont + 1};`;
      }
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      obstaculos.linhas[
        linha
      ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 5}/11;`;
      cont++;
    }
  };
  
  const direitaParaEsquerda = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    obstaculos.atual = 3;
    let cont = 0;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[
        linha
      ].arrayObstaculos[0].elemento.style = `grid-column: 1/${7 - cont};`;
      obstaculos.linhas[
        linha
      ].arrayObstaculos[2].elemento.style = `grid-column: ${11 - cont}/11;`;
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont > 5) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `display:none;`;
      }
      cont++;
    }
  };
  
  const esquerdaParaMeioParaDireita = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 3;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont > 3) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${8 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${12 - cont}/11;`;
      } else {
        if (cont < 1) {
          obstaculos.linhas[linha].arrayObstaculos[0].elemento.style =
            'display: none';
        } else {
          obstaculos.linhas[
            linha
          ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont + 1};`;
        }
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 5}/11;`;
      }
      cont++;
    }
  };
  
  const direitaParaMeioParaDireita = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 4;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont > 3) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 4}/11;`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont};`;
      } else {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${7 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${11 - cont}/11;`;
      }
      cont++;
    }
  };
  const esquerdaParaMeio = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 5;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont > 3) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${8 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 4}/11;`;
      } else {
        if (cont < 1)
          obstaculos.linhas[linha].arrayObstaculos[0].elemento.style =
            'display: none';
        else
          obstaculos.linhas[
            linha
          ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont + 1};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 5}/11;`;
      }
      cont++;
    }
  };
  
  const direitaParaMeio = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 5;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont > 3) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${8 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 4}/11;`;
        if (cont > 6) {
          obstaculos.linhas[
            linha
          ].arrayObstaculos[0].elemento.style = `grid-column: 1/2;`;
          obstaculos.linhas[
            linha
          ].arrayObstaculos[2].elemento.style = `grid-column: 10/11;`;
        }
      } else {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${7 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${11 - cont}/11;`;
      }
      cont++;
    }
  };
  
  const meioParaDireita = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 4;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      obstaculos.linhas[
        linha
      ].arrayObstaculos[0].elemento.style = `grid-column: 1/2;`;
      obstaculos.linhas[
        linha
      ].arrayObstaculos[2].elemento.style = `grid-column: 10/11;`;
      if (cont > 1)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont + 1};`;
      if (cont == 6)
        obstaculos.linhas[linha].arrayObstaculos[2].elemento.style =
          'display: none;';
      cont++;
    }
  };
  
  const meioParaEsquerda = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 3;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      obstaculos.linhas[
        linha
      ].arrayObstaculos[0].elemento.style = `grid-column: 1/2;`;
      obstaculos.linhas[
        linha
      ].arrayObstaculos[2].elemento.style = `grid-column: 10/11;`;
      if (cont > 1)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${11 - cont}/11;`;
      if (cont == 6)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `display: none;`;
      cont++;
    }
  };
  
  const zigueZague = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 5;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[linha].arrayObstaculos[1].elemento.style =
        'display: none;';
      if (cont < 4) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont + 3};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 6}/11;`;
        if (cont == 0)
          obstaculos.linhas[
            linha
          ].arrayObstaculos[2].elemento.style = `grid-column: 7/11;`;
      } else {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${10 - cont};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${13 - cont}/11;`;
        if (cont == 6)
          obstaculos.linhas[
            linha
          ].arrayObstaculos[2].elemento.style = `grid-column: 8/11;`;
      }
  
      cont++;
    }
  };
  
  const bifurcacao = (posicao, obstaculos) => {
    let fim = posicao * 7;
    let inico = fim - 7;
    let cont = 0;
    obstaculos.atual = 5;
    for (let linha = inico; linha < fim; linha++) {
      obstaculos.linhas[
        linha
      ].arrayObstaculos[1].elemento.style = `display: none`;
      obstaculos.linhas[
        linha
      ].arrayObstaculos[0].elemento.style = `grid-column: 1/${3 - cont};`;
      obstaculos.linhas[
        linha
      ].arrayObstaculos[2].elemento.style = `grid-column: ${cont + 9}/11`;
      if (cont > 0 && cont < 4)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[1].elemento.style = `grid-column: ${6 - cont}/${
          cont + 6
        }`;
      if (cont > 3)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[1].elemento.style = `grid-column: ${cont}/${12 - cont}`;
      if (cont == 6)
        obstaculos.linhas[
          linha
        ].arrayObstaculos[1].elemento.style = `display:none;`;
      if (cont > 1 && cont < 5) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `display: none`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `display: none`;
      } else if (cont > 4) {
        obstaculos.linhas[
          linha
        ].arrayObstaculos[0].elemento.style = `grid-column: 1/${cont - 3};`;
        obstaculos.linhas[
          linha
        ].arrayObstaculos[2].elemento.style = `grid-column: ${15 - cont}/11`;
      }
      cont++;
    }
  };
  const funcoesParaEscolher = [
    [
      // começa esquerda -- 0
      esquerdaParaDireita,
      esquerdaParaMeio,
      esquerdaParaMeioParaDireita,
    ],
    [
      // começa direita -- 1
      direitaParaEsquerda,
      direitaParaMeio,
      direitaParaMeioParaDireita,
    ],
    [
      // começa meio -- 2
      meioParaDireita,
      meioParaEsquerda,
      passageLivre,
      bifurcacao,
      zigueZague,
    ],
    [
      // termina esquerda -- 3
      direitaParaEsquerda,
      esquerdaParaMeioParaDireita,
      meioParaEsquerda,
    ],
    [
      // termina direita -- 4
      esquerdaParaDireita,
      direitaParaMeioParaDireita,
      meioParaDireita,
    ],
    [
      // termina meio -- 5
      esquerdaParaMeio,
      direitaParaMeio,
      bifurcacao,
      zigueZague,
    ],
  ];