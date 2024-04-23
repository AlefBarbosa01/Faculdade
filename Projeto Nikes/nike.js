// Dados do estoque de calçados
var estoque = [
    { modelo: "Air Max 90", categoria: "Esportivo", tamanho: 42, cor: "Preto", preço: 399.99, quantidade: 25 },
    { modelo: "Air Force 1", categoria: "Casual", tamanho: 38, cor: "Branco", preço: 299.99, quantidade: 18 },
    { modelo: "alef", categoria: "uau", tamanho: 42, cor: "amarelo", preço: 2999.99, quantidade: 2 },
    
    // Adicione mais calçados conforme necessário
];

// Função para exibir os calçados na tabela
function exibirEstoque() {
    var tabela = document.getElementById("estoque");
    var tbody = tabela.getElementsByTagName("tbody")[0];

    estoque.forEach(function(calçado) {
        var row = tbody.insertRow();
        row.insertCell(0).innerText = calçado.modelo;
        row.insertCell(1).innerText = calçado.categoria;
        row.insertCell(2).innerText = calçado.tamanho;
        row.insertCell(3).innerText = calçado.cor;
        row.insertCell(4).innerText = "R$ " + calçado.preço.toFixed(2);
        row.insertCell(5).innerText = calçado.quantidade;
    });
}

// Chamada da função ao carregar a página
window.onload = exibirEstoque;