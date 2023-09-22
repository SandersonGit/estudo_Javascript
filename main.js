

const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById("nome-beneficiario")
let formEValido = false


function validaNome (nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ')
    
    return nomeComArray.length >= 2
}


form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const numeroContaBeneficiario = document.getElementById("numero-conta")
    const valorDeposito = document.getElementById("valor-deposito")
    const mensagemSucesso =  `O montante de: <b>${valorDeposito.value}</b>, foi enviado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`
    
    formEValido = validaNome(nomeBeneficiario.value)

    if (formEValido) {
        const containerMensagem = document.querySelector(".success-message")
        containerMensagem.innerHTML = mensagemSucesso
        containerMensagem.style.display = 'block';

        nomeBeneficiario.value = " "
        numeroContaBeneficiario.value = ""
        valorDeposito.value=""
        } else {
            nomeBeneficiario.style.border = "1px solid red"
            document.querySelector(".error-message").style.display = "block"
        }
    })

    nomeBeneficiario.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formEValido = validaNome(e.target.value)
        if (!formEValido){
            nomeBeneficiario.style.border = "1px solid red"
            document.querySelector(".error-message").style.display = "block"
        } else {
            nomeBeneficiario.style = ""
            document.querySelector(".error-message").style.display = "none"
        }
    })
    
    
    
    

