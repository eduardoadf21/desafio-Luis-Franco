import { Repository } from "./repository.js";

const itens = new Repository()

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, carrinho) {
        let conta = 0

        const error = this.checkPedido(metodoDePagamento,carrinho)
        if (error == 0){
            for(let i=0; i<carrinho.length;i++){
                const item = carrinho[i].split(',')[0]
                const quantidade = carrinho[i].split(',')[1]

                switch(metodoDePagamento){
                    case 'dinheiro': 
                        conta += (itens.getValor(item)*0.95)*quantidade + 0.000001
                        break
                    case 'credito': 
                        conta += (itens.getValor(item)*1.03)*quantidade 
                        break
                    case 'debito': 
                        conta += (itens.getValor(item))*quantidade
                        break
                }

            }
            return "R$ "+conta.toFixed(2).replace(".",",") 
        }
        else
            return error
    }
    checkPedido(metodoDePagamento,carrinho){
        if(carrinho.length == 0)
            return 'Não há itens no carrinho de compra!';
        if (['credito', 'debito', 'dinheiro'].indexOf(metodoDePagamento) < 0) 
            return 'Forma de pagamento inválida!';
        

        let cafeExtrasAllowed=0, sanduicheExtrasAllowed=0
        for(let i=0; i<carrinho.length;i++){
            const item = carrinho[i].split(',')[0]
            const quantidade = carrinho[i].split(',')[1]
            if(quantidade == 0)
                return "Quantidade inválida!"
            else if(itens.getValor(item) == null)
                return "Item inválido!"
            if(item == 'sanduiche')
                sanduicheExtrasAllowed = 1
            else if(item == 'cafe')
                cafeExtrasAllowed = 1 
        }
        for(let i=0; i<carrinho.length;i++){
            const item = carrinho[i].split(',')[0]
            if((item == 'chantily' && !cafeExtrasAllowed) || (item == 'queijo' && !sanduicheExtrasAllowed)) 
                return "Item extra não pode ser pedido sem o principal"
        }
        return 0
    }

    
}


export { CaixaDaLanchonete };
