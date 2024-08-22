import React, { useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import '../global.css';

export default function Oferta(){
    const [listaCarros, setCarros] = useState([
        {id: 1, nome: "Fusca(Em Oferta)", preço: "De R$: 50000,00, Por R$: 40000,00", imagem: "/fusca.jpeg", cor: "branco", especificações: [" modelo: Fusca 1300 ", " motor: 1300 ", " combustivel: gasolina "]},
        {id: 2, nome: "Del Rey(Em Oferta)", preço: "De R$: 60000,00, Por R$: 50000,00", imagem: "/imgdelrey.jpeg", cor: "vermelho", especificações: [" modelo: Delrey guia ", " motor: AP 1.8 ", " combustivel: gasolina "] },
        {id: 3, nome: "Opala(Em Oferta)", preço: "De R$: 54000,00, Por R$: 44000,00", imagem: "/opala.jpeg", cor: "branco", especificações: [" modelo: Opala Diplomata 4.1 ", " motor: 8 por 1 ", " combustivel: gasolina "]},
        {id: 4, nome: "Uno Duas Portas(Em Oferta)", preço: "De R$: 100000,00, Por R$: 90000,00", imagem: "/unod.jpeg", cor: "branco", especificações: [" modelo: Uno Mille ", " motor: 1.0 ", " combustivel: gasolina e álcoo "] },
        {id: 5, nome: "Brasilia Amarela(Em Oferta)", preço: "De R$: 35000,00, Por R$: 25000,00", imagem: "/brasilia.jpeg", cor: "amarelo", especificações: [" modelo: Volkswagen Brasilia ", " motor: 1.6L ", " combustivel: gasolina "] }
      ]);
    
      const [listadosCarros, setListadosCarros] = useState([]);
    
      const adicionarCarro = (carro) => {
        setListadosCarros([...listadosCarros, carro]);
        alert("Carro Adicionado a Lista!")
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
       <Footer/>
       </>
    ); 
}