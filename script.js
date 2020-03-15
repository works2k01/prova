function Validar(){
    var nome = document.getElementById('Nome').value
    var endereço = document.getElementById('Endereço').value
    var pagamento = document.getElementsByTagName('pagamento')
    var camposvalidos = false
    var radiobutton = false
    var formulario = false

    //verificando campos
    if(nome!='' && endereço!=''){
        camposvalidos = true
    }
    //validando se o radioBox esta selecionado
    pagamento.forEach(pagamento => {
        if(pagamento.checked == true){
            radiobutton = true
        }
    });

    //mandando alerta para campos não preenchidos
    if(!camposvalidos || !radiobutton){
        window.alert('Preencha os campos!')
    }else{
        formulario = true
    }
    
    return formulario

}
function ExibirPagamento(){
    var FormasdePagamento = document.getElementsByName("pagamento")
    var Divpagamento = document.getElementsByTagName("div")

    //escondendo divs
    for(var i=0; i < Divpagamento ; i++){
        var d = Divpagamento[i]
        d.className = "esconder"
    }

    //procurando uma div para mostrar
    for(var i =0 ; i < FormasdePagamento.length ;i++){
        var FormadePgamento = FormasdePagamento[i]
        for(var j=0; j < Divpagamento.length ; j++){
            var d = Divpagamento[j]
            if(FormadePgamento.checked == true){
                if(FormadePgamento.value == d.getAttribute("name")){
                    d.className = ""
                }
            }
        }
    }
}