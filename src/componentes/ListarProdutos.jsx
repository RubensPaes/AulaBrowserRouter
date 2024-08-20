export default function ListarProdutos({nome, preço, imagem, adicionarCarro, especificações}){
    return(
   <div>
 <img src={imagem} alt={nome}/>
 <p className="pdoscarros">{nome}</p>
 <p className="pdoscarros">{preço}</p>
<p className="pdoscarros">{especificações}</p>
<button className="butao" onClick={adicionarCarro}>Comprar</button>
   </div>
    )
}