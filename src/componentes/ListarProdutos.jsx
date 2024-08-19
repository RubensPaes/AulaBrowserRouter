export default function ListarProdutos({nome, preço, imagem, especificações}){
    return(
   <div>
 <img src={imagem} alt={nome}/>
 <p className="pdoscarros">{nome}</p>
 <p className="pdoscarros">{preço}</p>
<p className="pdoscarros">{especificações}</p>
   </div>
    )
}