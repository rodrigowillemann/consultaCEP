// JQuery: biblioteca (framework) para JS
// $(seletor) -> elemento HTML ->.ação()
$(document).ready( // .ready()-> na abertura do documento HTML
    function(){
        $("#botao").click(
            function(){
                let cep = $("#cep").val(); //recebe o valor do input cep
                //Webservice -> respondem consulta -> ViaCEP
                //Dados do endereço JSON -> formato de dados:
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", 
                function(dados){ //dados -> rua, bairro, cidade,...
                    if(!("erro" in dados)) //se não encontrou erro
                    {
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                    }
                    else{
                        //Tratar o erro... cep inválido
                    }
                })
        });
    } //fim da função ready
);
