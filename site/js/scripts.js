var segundo = 0
var milisegundo = 0
var contando = false
var clicks = 0

function clicar() {
    if (!contando) {
        contando = true
        relogio()
    }
    if (segundo != 10) {
        clicks++
        clicksDisplay.innerHTML = `Clicks: ${clicks}`
    }
}

function relogio() {
    if (contando) {
        setTimeout(adicionar, 10)
    }
}

function adicionar() {
    if (contando) {
        if (segundo == 10) {
            parar()
        } else {
            milisegundo++
            milisegundos.innerHTML = `${milisegundo}`
            if (milisegundo == 100) {
                milisegundo = 0
                segundo++
                segundos.innerHTML = `${segundo}`
            }
            relogio()
        }
    }
}

function parar() {
    contando = false
    milisegundo = 0
    milisegundos.innerHTML = `00`
    cpsDisplay.innerHTML = `Clicks por Segundo: ${clicks / 10}`
}

function resetar() {
    contando = false
    segundo = 0
    segundos.innerHTML = `0`
    milisegundo = 0
    milisegundos.innerHTML = `00`
    clicks = 0
    clicksDisplay.innerHTML = `Clicks: 0`
    cpsDisplay.innerHTML = `Clicks por Segundo: 0`
}