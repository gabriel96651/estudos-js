function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = window.document.querySelector('#ano')
    var res = window.document.querySelector('#res')
    if (Fano.value.length == 0 || Number(Fano.value) > ano) {
        window.alert (' [ERRO]')
    } else {
        var sex = window.document.getElementsByName('#sexo')
        var idade = ano - Fano
        res.innerHTML = `sua idade e ${idade}`
    }
    

}