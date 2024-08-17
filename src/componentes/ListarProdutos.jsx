export default function ListarProdutos({nome, preço, cor, imagem}){
    return(
   <div>
 <img src={imagem} alt={nome}/>
 <p>{nome}</p>
 <p>{preço}</p>
 <p>{cor}</p>
   </div>
    )
}