let itens = Array()
	
		itens[0] = ["Hot dog", 2.3]
		itens[1] = ["X-Burguer", 3.10]
		itens[2] = ["X-Salada", 2.90]
		itens[3] = ["Misto quente", 3.50]
		itens[4] = ["Especial da casa", 5.70]
		itens[5] = ["Refrigerante", 2.50]	
		itens[6] = ["Suco", 1.80]

		let total = 0

	function calcularItens(){
		let pedido = prompt(`Selecione o pedido: \n 0 - Hot dog \n 1 - X-Burguer \n 2 - X-Salada \n 3 - Misto Quente \n 4 - Especial da Casa \n 5 - Refrigerante \n 6 - Suco`)

		let quantidade = prompt("Digite a quantidade: ")
		total += quantidade * itens[pedido][1]

		document.write("O total da sua compra é de: R$ " + total.toFixed(2))	
	}
	
	calcularItens()
