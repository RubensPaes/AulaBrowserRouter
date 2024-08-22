import React, { useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css';

export default function Produto(){
    const [listaCarros, setCarros] = useState([
        {id: 1, nome: "Onix", preço: "R$: 90000,00", imagem: "/Onixn.jpeg", cor: "branco", especificações: [" modelo: Onix 2025 ", " motor: Turbo ", " combustivel: gasolina "]},
        {id: 2, nome: "Onix Plus", preço: "R$: 101000,00", imagem: "/OnixPlusn.jpg", cor: "vermelho", especificações: [" modelo: Onix Plus 2025 ", " motor: Turbo 1.0 12V Flex  ", " combustivel: Flex (Gasolina/Etanol) "] },
        {id: 3, nome: "Montana", preço: "R$: 130000,00", imagem: "/Montana.jpeg", cor: "vermelho", especificações: [" modelo: Montana 2025 ", " motor: Turbo ", " combustivel: gasolina "]},
        {id: 4, nome: "Uno Duas Portas", preço: "R$: 100000,00", imagem: "/unod.jpeg", cor: "branco", especificações: [" modelo: Uno Mille ", " motor: 1.0 ", " combustivel: gasolina e álcoo "] },
        {id: 5, nome: "Brasilia Amarela", preço: "R$: 35000,00", imagem: "/brasilia.jpeg", cor: "amarelo", especificações: [" modelo: Volkswagen Brasilia ", " motor: 1.6L ", " combustivel: gasolina "] }
      ]);
      const [listadosCarros, setListadosCarros] = useState([]);

      const adicionarCarro = (carro) => {
        setListadosCarros([...listadosCarros, carro]);
        alert("você adicionou um carro!")
      };
    
   
    return(
        <>
 <Header/>
 <div className="carroprincipal">
 <div className="carrodosprodutos">
   {listaCarros.map((carro) => (
     <ListarProdutos
       key={carro.id}
       imagem={carro.imagem}
       nome={carro.nome}
       preço={carro.preço}
       adicionarCarro={() => adicionarCarro(carro)}
     />
   ))}
 </div>
</div>
</>
    );
}