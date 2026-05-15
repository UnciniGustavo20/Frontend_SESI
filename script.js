function executarSistema() {
    // dados de entrada 
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true"

    // dados de saída 
    const msg = document.getElementById("mensagem-autorização");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // validação para cmapos vazios 
    if (!nome || isNaN(idade) || isNaN(valor)) {
        alert("Por favor, peencha todos os campos!!");
        return;          
    }

    //regra de negócios 
    if (idade >= 16){
        msg.innerText = `venda autorizada ${nome}`;
        msg.style.color = "#00ff88";

    //desconto
    let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

    // estoque
    let estoque = ["placa de video", "processador", "memoria RAM"];
    lista.innerHTML = ""; // limpa a lista anterior
    
    }


}       