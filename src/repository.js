import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./itens.json");

console.log(data.itens)


class Repository{

    getValor(codigo) {
        for(let i=0; i<data.itens.length;i++){
            if(codigo == data.itens[i].codigo)
                return data.itens[i].valor
        }
    }

} 


export { Repository }