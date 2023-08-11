import { Repository } from "./repository.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, carrinho) {
        const itens = new Repository()
        let conta = 0

        if(carrinho.length == 0)
            return 'Não há itens no carrinho de compra!';

        for(let i=0; i<carrinho.length;i++)
            if(metodoDePagamento == 'dinheiro'){
                const item = carrinho[i].split(',')[0]
                conta = conta + itens.getValor(item)*0.95
            }
            else if(metodoDePagamento == 'credito'){
                const item = carrinho[i].split(',')[0]
                conta = itens.getValor(item)*1.03
            }
            else if(metodoDePagamento == 'debito'){
                const item = carrinho[i].split(',')[0]
                conta = conta + itens.getValor(item)
            }
            return "R$ "+conta.toFixed(2).replace(".",",")

    }

}

const test = new CaixaDaLanchonete()
test.calcularValorDaCompra('dinheiro', (['cafe,1']))

export { CaixaDaLanchonete };
