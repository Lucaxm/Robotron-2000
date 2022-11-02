
const all_buttoms_maisEmenos = document.querySelectorAll('[data-controle]')
const all_estatisticas = document.querySelectorAll('[data-estatisticas]')
const lista_pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

all_buttoms_maisEmenos.forEach (
  (par_cadaBotaoMaisEMenos) => {
    par_cadaBotaoMaisEMenos.addEventListener (
      'click', (par_click_pegaMaisEMenos) => {
        const buttom_maisEmenos = par_click_pegaMaisEMenos.target.dataset.controle
        const divControle = par_click_pegaMaisEMenos.target.parentNode
        const buttom_dataPeca = par_click_pegaMaisEMenos.target.dataset.peca
        manipulaDados(buttom_maisEmenos, divControle, buttom_dataPeca)
        /*manipulaDados(buttom_maisEmenos, divControle)
        atualizaEstatisticas(buttom_maisEmenos, divControle, buttom_dataPeca)*/
      }
    )
  }
)

function manipulaDados(par_buttom_maisEmenos, par_divControle, par_buttom_dataPeca) {
  const contador = par_divControle.querySelector('[data-contador]')

  if (par_buttom_maisEmenos === "+" && contador.value >= 0) {
    contador.value = parseInt(contador.value) + 1

    all_estatisticas.forEach (
      (par_cadaEstatistica) => {
        par_cadaEstatistica.textContent = parseInt(par_cadaEstatistica.textContent) + lista_pecas[par_buttom_dataPeca][par_cadaEstatistica.dataset.estatisticas]
      }
    )
  }
  else if (par_buttom_maisEmenos ==='-' && contador.value > 0) {
    contador.value = parseInt(contador.value) - 1

    all_estatisticas.forEach (
      (par_cadaEstatistica) => {
        par_cadaEstatistica.textContent = parseInt(par_cadaEstatistica.textContent) - lista_pecas[par_buttom_dataPeca][par_cadaEstatistica.dataset.estatisticas]
      }
    )
  }
  else if (par_buttom_maisEmenos ==='-' && contador.value <= 0) {
    all_estatisticas.forEach (
      (par_cadaEstatistica) => {
        par_cadaEstatistica.textContent = parseInt(par_cadaEstatistica.textContent)
      }
    )

    alert('O contador não pode ser negativo')
  }
  else {
    alert('Error 404, o robô explodiu')
  }
}
