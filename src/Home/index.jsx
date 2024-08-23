import React, { useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from '../componentes/ListarProdutos';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css';

export default function Home() {
  const [listaCarros, setCarros] = useState([
    { id: 1, nome: "Onix", preço: "R$: 90000,00", imagem: "/Onixn.jpeg", cor: "branco", especificações: [" modelo: Onix 2025 ", " motor: Turbo ", " combustivel: gasolina "] },
    { id: 2, nome: "Onix Plus", preço: "R$: 101000,00", imagem: "/OnixPlusn.jpg", cor: "vermelho", especificações: [" modelo: Onix Plus 2025 ", " motor: Turbo 1.0 12V Flex  ", " combustivel: Flex (Gasolina/Etanol) "] },
    { id: 3, nome: "Montana", preço: "R$: 130000,00", imagem: "/Montana.jpeg", cor: "vermelho", especificações: [" modelo: Montana 2025 ", " motor: Turbo ", " combustivel: gasolina "] },
    { id: 4, nome: "Spin", preço: "R$: 122000,00", imagem: "/Spin.jpeg", cor: "azul", especificações: [" modelo: Spin 2025 ", " motor: 1.0 ", " combustivel: Gasolina e álcool"] },
    { id: 5, nome: "Tracker", preço: "R$: 119000,00", imagem: "/Tracker.jpeg", cor: "cinza", especificações: [" modelo: Tracker 2025 ", " motor: 1.0 ", " combustivel: Gasolina e álcool"] },
    { id: 6, nome: "Onix", preço: "R$: 90000,00", imagem: "/Onixn.jpeg", cor: "branco", especificações: [" modelo: Onix 2025 ", " motor: Turbo ", " combustivel: gasolina "] }
  ]);

  const [listadosCarros, setListadosCarros] = useState([]);

  const adicionarCarro = (carro) => {
    setListadosCarros([...listadosCarros, carro]);
    alert("Carro Adicionado a Lista!")
  };

  return (
    <>
      <Header />
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
          <img src='/carroparacarousel3.jpeg' alt="imagem 1" />
        </div>
        <div>
          <img src='/carroparacarousel2.jpeg' alt="imagem 2" />
        </div>
        <div>
          <img src='/carroparacarousel4.jpeg' alt="imagem 3" />
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

      <Footer />
    </>
  );
}
