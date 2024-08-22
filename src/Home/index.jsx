import React, { useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from '../componentes/ListarProdutos';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css';

export default function Home() {
  const [listaCarros, setCarros] = useState([
    {id: 1, nome: "Fusca", preço: "R$: 50000,00", imagem: "/fusca.jpeg", cor: "branco", especificações: [" modelo: Fusca 1300 ", " motor: 1300 ", " combustivel: gasolina "]},
    {id: 2, nome: "Del Rey", preço: "R$: 60000,00", imagem: "/imgdelrey.jpeg", cor: "vermelho", especificações: [" modelo: Delrey guia ", " motor: AP 1.8 ", " combustivel: gasolina "] },
    {id: 3, nome: "Opala", preço: "R$: 54000,00", imagem: "/opala.jpeg", cor: "branco", especificações: [" modelo: Opala Diplomata 4.1 ", " motor: 8 por 1 ", " combustivel: gasolina "]},
    {id: 4, nome: "Uno Duas Portas", preço: "R$: 100000,00", imagem: "/unod.jpeg", cor: "branco", especificações: [" modelo: Uno Mille ", " motor: 1.0 ", " combustivel: gasolina e álcoo "] },
    {id: 5, nome: "Brasilia Amarela", preço: "R$: 35000,00", imagem: "/brasilia.jpeg", cor: "amarelo", especificações: [" modelo: Volkswagen Brasilia ", " motor: 1.6L ", " combustivel: gasolina "] }
  ]);

  const [listadosCarros, setListadosCarros] = useState([]);

  const adicionarCarro = (carro) => {
    setListadosCarros([...listadosCarros, carro]);
    alert("você adicionou um carro!")
  };

  return (
    <>
      <Header/>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        interval={3000}
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
      >
        <div>
          <img src='/carroparacarousel3.jpeg' alt="imagem 1"/>
        </div>
        <div>
          <img src='/carroparacarousel2.jpeg' alt="imagem 2"/>
        </div>
        <div>
          <img src='/carroparacarousel4.jpeg' alt="imagem 3"/>
        </div>
      </Carousel>
      
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
